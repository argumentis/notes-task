import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import _ from 'lodash'
import { changeFolder } from '../helper'
import ContextMenu from './contextMenu'
import { connect } from 'react-redux'
import { setFolder, setFolderId } from '../../../reducersFolder/folderReducer'
import { setNoteId } from '../../../reducersFolder/notesReducer'

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiListItem-root': {
      height: '20px',
      padding: '15px 0px 15px 15px'
    }
  },
  rootInput: {
    '& .Mui-focused': {
      backgroundColor: '#75c1ff'
    },
    '& .Mui-disabled': {
      color: 'black',
      backgroundColor: 'none'
    }
  }
}))

const mapStateToProps = store => {
  const { foldersList, folderId } = store.folder
  const { noteId } = store.notes
  return {
    foldersList,
    folderId,
    noteId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderAction: foldersList => dispatch(setFolder(foldersList)),
    setFolderIdAction: folderId => dispatch(setFolderId(folderId)),
    setNoteIdAction: noteId => dispatch(setNoteId(noteId))
  }
}

const initialState = {
  mouseX: null,
  mouseY: null
}

function FolderItem (props, event) {
  const classes = useStyles()
  const { foldersList, folderId, setFolderIdAction, setFolderAction, itemId, itemName, itemStatus, setNoteIdAction, noteId } = props
  const uniqid = require('uniqid')
  const wrapperRef = useRef(null)
  const [contextMenu, setContextMenu] = useState(initialState)

  function useOutsideClose (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          const newData = _.cloneDeep(foldersList)
          setFolderAction(changeFolder('renameFolder', newData, folderId, true, itemName))
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const handleListItemClick = (event, index) => {
    if (folderId !== itemId) {
      setFolderIdAction(index)
    }
    if (noteId !== 0) {
      setNoteIdAction(0)
    }
  }

  const handleDoubleClick = (event) => {
    event.preventDefault()
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    })
  }

  const handleOnChange = (event) => {
    const newData = _.cloneDeep(foldersList)
    setFolderAction(changeFolder('renameFolder', newData, folderId, itemStatus, event.target.value))
  }

  if (itemStatus === false) {
    useOutsideClose(wrapperRef)
  }

  return (
    <div ref={wrapperRef} className={classes.root}>
      <ListItem
        key={uniqid()}
        button
        onDoubleClick={handleDoubleClick}
        selected={folderId === itemId}
        onClick={(event) => handleListItemClick(event, itemId)}
      >
        <ListItemText
          primary={
            <TextField
              id={itemId}
              className={classes.rootInput}
              defaultValue={itemName}
              onChange={handleOnChange}
              InputProps={{
                disableUnderline: true,
                disabled: itemStatus,
                autoFocus: true
              }}
            />
          }
        />
      </ListItem>
      <ContextMenu
        posContextMenu={contextMenu}
        setPosContextMenu={setContextMenu}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderItem)

FolderItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemStatus: PropTypes.bool.isRequired,
  setFolderAction: PropTypes.func.isRequired,
  foldersList: PropTypes.array.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
