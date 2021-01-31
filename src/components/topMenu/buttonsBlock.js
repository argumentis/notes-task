import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../reducersFolder/notesReducer'
import { setFolder, setFolderId } from '../../reducersFolder/folderReducer'
import IconButton from '@material-ui/core/IconButton'
import ViewCompactOutlinedIcon from '@material-ui/icons/ViewCompactOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined'
import { arrPusher, arrRemoveNote } from '../notesBlock/helper'
import { arrRemoveFolder } from '../folderBlock/helper'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '30%',
    '& > *': {
      marginLeft: '15px',
      marginTop: '5px',
      padding: '0px',
      width: '40px',
      height: '20px',
      borderRadius: '3px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 5px 4px -4px rgba(0, 0, 0, .2) '
    }
  }
}))

const mapStateToProps = store => {
  const { noteId, notesList } = store.notes
  const { folderId, foldersList } = store.folder

  return {
    noteId,
    folderId,
    notesList,
    foldersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNotesAction: notesList => dispatch(setNotes(notesList)),
    setNoteIdAction: noteId => dispatch(setNoteId(noteId)),
    setFolderAction: foldersList => dispatch(setFolder(foldersList)),
    setFolderIdAction: folderId => dispatch(setFolderId(folderId))
  }
}

function ButtonsBlock (props) {
  const classes = useStyles()
  const { folderListDisplay, setFolderListDisplay, notesList, folderId, setNotesAction, setNoteIdAction, noteId, foldersList, setFolderAction, setFolderIdAction } = props

  const changeDisplay = () => {
    if (folderListDisplay === 'block') {
      setFolderListDisplay('none')
    } else {
      setFolderListDisplay('block')
    }
  }

  const addNoteButton = () => {
    const newData = _.cloneDeep(notesList)
    setNotesAction(arrPusher(newData, folderId))
  }

  const removeActiveElement = () => {
    const newDataFolders = _.cloneDeep(foldersList)
    const newDataNotes = _.cloneDeep(notesList)
    if (noteId === 0) {
      setFolderAction(arrRemoveFolder(newDataFolders, newDataNotes, folderId))
      setFolderIdAction(0)
    } else {
      setNotesAction(arrRemoveNote(newDataNotes, noteId))
      setNoteIdAction(0)
    }
  }

  return (
    <div className={classes.root}>
      <IconButton aria-label='Close/Open folder list' onClick={changeDisplay}>
        <ViewCompactOutlinedIcon fontSize='small'/>
      </IconButton>
      <IconButton aria-label='Delete current element' onClick={removeActiveElement}>
        <DeleteOutlineOutlinedIcon fontSize='small' />
      </IconButton>
      <IconButton aria-label='Add note' onClick={addNoteButton}>
        <NoteAddOutlinedIcon fontSize='small' />
      </IconButton>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsBlock)

ButtonsBlock.propTypes = {
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  notesList: PropTypes.array.isRequired,
  foldersList: PropTypes.array.isRequired,
  setNotesAction: PropTypes.func.isRequired,
  setFolderAction: PropTypes.func.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  folderListDisplay: PropTypes.string.isRequired,
  setFolderListDisplay: PropTypes.func.isRequired
}
