import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import _ from 'lodash'
import { changeNote } from '../helper'
import ContextMenu from './contextMenu'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../../reducersFolder/notesReducer'

const useStyles = makeStyles(() => ({
  root: {
    '& .Mui-selected': {
      backgroundColor: '#fde46e'
    },
    '& .MuiListItemText-root': {
      flex: '0'
    },
    '& .MuiListItem-root': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: '40px'
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
  const { notesList, noteId } = store.notes
  return {
    notesList,
    noteId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNotesAction: notesList => dispatch(setNotes(notesList)),
    setNoteIdAction: noteId => dispatch(setNoteId(noteId))
  }
}

const initialState = {
  mouseX: null,
  mouseY: null
}

function NotesItem (props, event) {
  const classes = useStyles()
  const { notesList, noteId, setNoteIdAction, setNotesAction, itemId, itemName, itemStatus, itemDate } = props
  const wrapperRef = useRef(null)
  const [contextMenu, setContextMenu] = useState(initialState)

  function useOutsideClose (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          const newData = _.cloneDeep(notesList)
          setNotesAction(changeNote('renameNote', newData, noteId, true, itemName))
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const handleListItemClick = (event, index) => {
    if (noteId !== itemId) {
      setNoteIdAction(index)
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
    const newData = _.cloneDeep(notesList)
    setNotesAction(changeNote('renameNote', newData, noteId, itemStatus, event.target.value))
  }

  if (itemStatus === false) {
    useOutsideClose(wrapperRef)
  }

  return (
    <div ref={wrapperRef} className={classes.root}>
      <ListItem
        button
        onDoubleClick={handleDoubleClick}
        selected={noteId === itemId}
        onClick={(event) => handleListItemClick(event, itemId)}
      >
        <ListItemText
          primary={
            <TextField
              id={itemId}
              className={classes.rootInput}
              value={itemName}
              onChange={handleOnChange}
              InputProps={{
                disableUnderline: true,
                disabled: itemStatus,
                autoFocus: true
              }}
            />
          }
        />
        <div>{itemDate}</div>
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
)(NotesItem)

NotesItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemDate: PropTypes.string.isRequired,
  itemStatus: PropTypes.bool.isRequired,
  setNotesAction: PropTypes.func.isRequired,
  notesList: PropTypes.array.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}