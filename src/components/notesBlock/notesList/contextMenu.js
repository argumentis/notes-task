import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import _ from 'lodash'
import { arrPusher, arrRemoveNote, changeNote } from '../helper'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../../reducersFolder/notesReducer'

const initialState = {
  mouseX: null,
  mouseY: null
}

const mapStateToProps = store => {
  const { notesList, noteId } = store.notes
  const { folderId } = store.folder
  return {
    notesList,
    noteId,
    folderId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNotesAction: notesList => dispatch(setNotes(notesList)),
    setNoteIdAction: noteId => dispatch(setNoteId(noteId))
  }
}

function ContextMenu (props) {
  const { setNotesAction, notesList, setNoteIdAction, noteId, posContextMenu, setPosContextMenu, folderId } = props
  const { mouseX, mouseY } = posContextMenu

  // func for close context menu
  const handleClose = () => {
    setPosContextMenu(initialState)
  }

  // func for push new note to array
  const addNoteButton = () => {
    const newData = _.cloneDeep(notesList)
    setNotesAction(arrPusher(newData, folderId))
    handleClose()
  }

  // func for change note name
  const renameNoteButton = (event) => {
    handleClose()
    const newData = _.cloneDeep(notesList)
    setNotesAction(changeNote('changeStatus', newData, noteId, false))
  }

  // func for delete note from array
  const removeNoteButton = () => {
    const newData = _.cloneDeep(notesList)
    setNotesAction(arrRemoveNote(newData, noteId))
    setNoteIdAction(0)
    handleClose()
  }

  return (
    <div style={{ cursor: 'context-menu' }}>
      <Menu
        keepMounted
        open={mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          mouseY !== null && mouseX !== null // take X Y position context menu
            ? { top: mouseY, left: mouseX }
            : undefined
        }
      >
        <MenuItem onClick={addNoteButton}>Add Note</MenuItem>
        <MenuItem onClick={renameNoteButton}>Rename Note</MenuItem>
        <MenuItem onClick={removeNoteButton}>Delete Note</MenuItem>
      </Menu>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextMenu)

ContextMenu.propTypes = {
  setNotesAction: PropTypes.func.isRequired,
  notesList: PropTypes.array.isRequired,
  setPosContextMenu: PropTypes.func.isRequired,
  posContextMenu: PropTypes.object.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
