import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../../../reducersFolder/notesReducer'
import { setFolder, setFolderId } from '../../../../reducersFolder/folderReducer'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import CreateIcon from '@material-ui/icons/Create'
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined'
import { arrRemoveFolder, changeFolder } from '../../helper'
import { arrPusher } from '../../../notesBlock/helper'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginRight: '20px',
    '& > *': {
      marginLeft: '5px',
      marginTop: '5px',
      padding: '0px',
      width: '40px',
      height: '20px'
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

function ButtonsBlockNotesMobil (props) {
  const classes = useStyles()
  const { notesList, currId, setNotesAction, foldersList, setFolderAction, setFolderIdAction } = props

  // func for change folder name
  const renameFolderButton = (event) => {
    const newData = _.cloneDeep(foldersList)
    setFolderAction(changeFolder('changeStatus', newData, currId, false))
  }

  // func for add new notes from folder
  const addNoteButton = () => {
    if (currId !== 0) {
      const newData = _.cloneDeep(notesList)
      setNotesAction(arrPusher(newData, currId))
    }
  }

  // func for remove folder
  const removeFolder = () => {
    const newDataFolders = _.cloneDeep(foldersList)
    const newDataNotes = _.cloneDeep(notesList)
    setFolderAction(arrRemoveFolder(newDataFolders, newDataNotes, currId))
    setFolderIdAction(0)
  }

  return (
    <div className={classes.root}>
      <IconButton aria-label='Rename Folder' onClick={renameFolderButton}>
        <CreateIcon />
      </IconButton>
      <IconButton aria-label='Add note' onClick={addNoteButton}>
        <NoteAddOutlinedIcon />
      </IconButton>
      <IconButton aria-label='Delete folder' onClick={removeFolder}>
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
  foldersList: PropTypes.array.isRequired,
  setNotesAction: PropTypes.func.isRequired,
  setFolderAction: PropTypes.func.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  setFolderIdAction: PropTypes.func.isRequired
}
