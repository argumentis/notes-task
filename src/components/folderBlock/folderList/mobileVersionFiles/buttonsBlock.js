import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../../../reducersFolder/notesReducer'
import { setFolder, setFolderId } from '../../../../reducersFolder/folderReducer'
import IconButton from '@material-ui/core/IconButton'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { arrRemoveFolder, changeFolder } from '../../helper'
import { arrPusher } from '../../../notesBlock/helper'
import _ from 'lodash'

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
  const { notesList, currId, setNotesAction, foldersList, setFolderAction, setFolderIdAction } = props

  // func for change folder name
  const renameFolderButton = (event) => {
    const newData = _.cloneDeep(foldersList)
    setFolderAction(changeFolder('changeStatus', newData, currId, false))
  }

  // func for add new notes from folder
  const addNoteButton = () => {
    const newData = _.cloneDeep(notesList)
    if (currId !== 0) {
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
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton {...bindTrigger(popupState)}>
            <MoreHorizIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={addNoteButton}>Add Note</MenuItem>
            <MenuItem onClick={renameFolderButton}>Rename Folder</MenuItem>
            <MenuItem onClick={removeFolder}>Remove Folder</MenuItem>
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
  foldersList: PropTypes.array.isRequired,
  setNotesAction: PropTypes.func.isRequired,
  setFolderAction: PropTypes.func.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  setFolderIdAction: PropTypes.func.isRequired
}
