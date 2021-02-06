import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import _ from 'lodash'
import { arrPusher, arrRemoveFolder, changeFolder } from '../helper'
import { connect } from 'react-redux'
import { setFolder, setFolderId } from '../../../reducersFolder/folderReducer'

const initialState = {
  mouseX: null,
  mouseY: null
}

const mapStateToProps = store => {
  const { foldersList, folderId } = store.folder
  const { notesList } = store.notes
  return {
    foldersList,
    folderId,
    notesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderAction: foldersList => dispatch(setFolder(foldersList)),
    setFolderIdAction: folderId => dispatch(setFolderId(folderId))
  }
}

function ContextMenu (props) {
  const { setFolderAction, foldersList, setFolderIdAction, folderId, posContextMenu, setPosContextMenu, notesList } = props
  const { mouseX, mouseY } = posContextMenu

  const handleClose = () => {
    setPosContextMenu(initialState)
  }

  const addFolderButton = () => {
    const newData = _.cloneDeep(foldersList)
    setFolderAction(arrPusher(newData))
    handleClose()
  }

  const renameFolderButton = (event) => {
    handleClose()
    const newData = _.cloneDeep(foldersList)
    setFolderAction(changeFolder('changeStatus', newData, folderId, false))
  }

  const removeFolderButton = () => {
    const newDataFolders = _.cloneDeep(foldersList)
    const newDataNotes = _.cloneDeep(notesList)
    setFolderAction(arrRemoveFolder(newDataFolders, newDataNotes, folderId))
    setFolderIdAction(0)
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
          mouseY !== null && mouseX !== null
            ? { top: mouseY, left: mouseX }
            : undefined
        }
      >
        <MenuItem onClick={addFolderButton}>Add folder</MenuItem>
        <MenuItem onClick={renameFolderButton}>Rename folder</MenuItem>
        <MenuItem onClick={removeFolderButton}>Delete folder</MenuItem>
      </Menu>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextMenu)

ContextMenu.propTypes = {
  setFolderAction: PropTypes.func.isRequired,
  foldersList: PropTypes.array.isRequired,
  notesList: PropTypes.array.isRequired,
  setPosContextMenu: PropTypes.func.isRequired,
  posContextMenu: PropTypes.object.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
