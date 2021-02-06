import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setNoteId, setNotes } from '../../reducersFolder/notesReducer'
import { changeNote } from '../notesBlock/helper'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  textAreaStyle: {
    width: '99%',
    border: '0px',
    height: '85vh',
    resize: 'none',
    outline: 'none',
    backgroundColor: '#f7f6f7',
    marginTop: '20px'
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
    setNoteIdAction: noteId => dispatch(setNoteId(noteId)),
    setNotesAction: notesList => dispatch(setNotes(notesList))
  }
}

function NoteTextArea (props) {
  const classes = useStyles()
  const { noteId, notesList, setNotesAction, defaultValue } = props

  const handleOnlChange = (event) => {
    const newData = _.cloneDeep(notesList)
    setNotesAction(changeNote('changeNoteValue', newData, noteId, true, event.target.value))
  }

  return (
    <div>
        <textarea
            className={classes.textAreaStyle}
            defaultValue={defaultValue}
            onBlur={handleOnlChange}
        />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTextArea)

NoteTextArea.propTypes = {
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  notesList: PropTypes.array.isRequired,
  setNotesAction: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
}
