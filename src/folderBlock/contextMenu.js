import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import _ from 'lodash'
import { arrPusher, arrRemoveFolder } from './helper'
import { connect } from 'react-redux'
import { setFolder, setFolderId, setPosFolderMenu } from '../reducersFolder/mainReducer'

const initialState = {
  mouseX: null,
  mouseY: null
}

const mapStateToProps = store => {
  const { foldersList, folderId, folderContextMenu } = store.main
  return {
    foldersList,
    folderId,
    folderContextMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderAction: foldersList => dispatch(setFolder(foldersList)),
    setFolderIdAction: folderId => dispatch(setFolderId(folderId)),
    setPosFolderMenuAction: folderContextMenu => dispatch(setPosFolderMenu(folderContextMenu))
  }
}

function ContextMenu (props) {
  const { setPosFolderMenuAction, folderContextMenu, setFolderAction, foldersList, folderId, setFolderIdAction } = props
  const { mouseX, mouseY } = folderContextMenu
  const newData = _.cloneDeep(foldersList)

  const handleClose = () => {
    setPosFolderMenuAction(initialState)
  }

  const addFolderButton = () => {
    setFolderAction(arrPusher(newData))
    handleClose()
  }

  const removeFolderButton = () => {
    setFolderAction(arrRemoveFolder(newData, folderId))
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
        <MenuItem onClick={handleClose}>Rename folder</MenuItem>
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
  setPosFolderMenuAction: PropTypes.func.isRequired,
  folderContextMenu: PropTypes.object.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
