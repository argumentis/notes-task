import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../../../reducersFolder/notesReducer'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { arrRemoveNote, changeNote } from '../../helper'
import _ from 'lodash'

const mapStateToProps = store => {
  const { noteId, notesList } = store.notes

  return {
    noteId,
    notesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNotesAction: notesList => dispatch(setNotes(notesList)),
    setNoteIdAction: noteId => dispatch(setNoteId(noteId))
  }
}

function ButtonsBlockNotesMobil (props) {
  const { notesList, currId, setNotesAction, setNoteIdAction } = props

  // func for change note name
  const renameNoteButton = (event) => {
    const newData = _.cloneDeep(notesList)
    setNotesAction(changeNote('changeStatus', newData, currId, false))
  }

  // func for delete note from array
  const removeNoteButton = () => {
    const newData = _.cloneDeep(notesList)
    setNotesAction(arrRemoveNote(newData, currId))
    setNoteIdAction(0)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton aria-label='menu' {...bindTrigger(popupState)}>
            <MoreHorizIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={renameNoteButton}>Rename Note</MenuItem>
            <MenuItem onClick={removeNoteButton}>Remove Note</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsBlockNotesMobil)

ButtonsBlockNotesMobil.propTypes = {
  currId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  notesList: PropTypes.array.isRequired,
  setNotesAction: PropTypes.func.isRequired,
  setNoteIdAction: PropTypes.func.isRequired
}
