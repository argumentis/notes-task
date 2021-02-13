import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../../../reducersFolder/notesReducer'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CreateIcon from '@material-ui/icons/Create'
import { arrRemoveNote, changeNote } from '../../helper'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginRight: '20px',
    '& > *': {
      marginLeft: '5px',
      marginTop: '30px',
      padding: '0px',
      width: '40px',
      height: '20px'
    }
  }
}))

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
  const classes = useStyles()
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
    <div className={classes.root}>
      <IconButton aria-label='Rename Folder' onClick={renameNoteButton}>
        <CreateIcon />
      </IconButton>
      <IconButton aria-label='Delete folder' onClick={removeNoteButton}>
        <CloseIcon />
      </IconButton>
    </div>
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
