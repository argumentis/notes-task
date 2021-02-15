import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import _ from 'lodash'
import { changeFolder } from '../helper'
import ContextMenu from './contextMenu'
import { connect } from 'react-redux'
import { setFolder, setFolderId } from '../../../reducersFolder/folderReducer'
import { setNoteId } from '../../../reducersFolder/notesReducer'
import NotesListMobile from '../../notesBlock/notesList/mobileVersionFiles/notesListMobile'
import Hidden from '@material-ui/core/Hidden'
import ButtonsBlockNotesMobil from './mobileVersionFiles/buttonsBlock'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiListItem-root': {
      height: '40px',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#cccccc',
        height: '60px'
      }
    }
  },
  rootInput: {
    display: 'flex',
    '& .Mui-focused': {
      backgroundColor: '#f7f6f7'
    },
    '& .Mui-disabled': {
      color: 'black'
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
  const wrapperRef = useRef(null)
  const [contextMenu, setContextMenu] = useState(initialState)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  // func for change status input when click outside folder item
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

  // func for set selected folder
  const handleListItemClick = (event, index) => {
    if (folderId !== itemId) {
      setFolderIdAction(index)
    }
    if (noteId !== 0) {
      setNoteIdAction(0)
    }
  }

  // func for set coordinates context menu
  const handleDoubleClick = (event) => {
    if (matches) {
      event.preventDefault()
      setContextMenu({
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4
      })
    }
  }

  // func for change value name folder onChange
  const handleOnChange = (event) => {
    const newData = _.cloneDeep(foldersList)
    setFolderAction(changeFolder('renameFolder', newData, folderId, itemStatus, event.target.value))
  }

  // monitors the state of input
  if (itemStatus === false) {
    useOutsideClose(wrapperRef)
  }

  return (
    <div>
      <div className={classes.root} ref={wrapperRef}>
        <ListItem
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
           <Hidden mdUp>
            <ButtonsBlockNotesMobil currId={itemId}/>
           </Hidden>
        </ListItem>
      </div>
      <Hidden mdUp>
        <NotesListMobile currFolderId={itemId}/>
      </Hidden>
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
