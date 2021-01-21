import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
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
  const { setPosFolderMenuAction, folderContextMenu } = props
  const { mouseX, mouseY } = folderContextMenu

  const handleClose = () => {
    setPosFolderMenuAction(initialState)
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
        <MenuItem onClick={handleClose}>Add folder</MenuItem>
        <MenuItem onClick={handleClose}>Rename folder</MenuItem>
        <MenuItem onClick={handleClose}>Delete folder</MenuItem>
      </Menu>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContextMenu)

ContextMenu.propTypes = {
  foldersList: PropTypes.object.isRequired,
  setPosFolderMenuAction: PropTypes.func.isRequired,
  folderContextMenu: PropTypes.array.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
