import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import ContextMenu from './contextMenu'
import _ from 'lodash'
import { arrRenameFolder } from './helper'
import { connect } from 'react-redux'
import { setFolder, setFolderId, setPosFolderMenu, setfolderStatusInput } from '../reducersFolder/mainReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  rootInput: {
    '& .Mui-focused': {
      backgroundColor: '#75c1ff'
    },
    '& .Mui-disabled': {
      color: 'black',
      backgroundColor: 'none'
    }
  }
}))

const mapStateToProps = store => {
  const { foldersList, folderId, folderContextMenu, folderStatusInput } = store.main
  return {
    foldersList,
    folderId,
    folderContextMenu,
    folderStatusInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderAction: foldersList => dispatch(setFolder(foldersList)),
    setFolderIdAction: folderId => dispatch(setFolderId(folderId)),
    setPosFolderMenuAction: folderContextMenu => dispatch(setPosFolderMenu(folderContextMenu)),
    setfolderStatusInputAction: folderStatusInput => dispatch(setfolderStatusInput(folderStatusInput))
  }
}
function SelectedListItem (props) {
  const classes = useStyles()
  const { foldersList, folderId, setFolderIdAction, setPosFolderMenuAction, setFolderAction, folderStatusInput, setfolderStatusInputAction } = props
  const uniqid = require('uniqid')

  const handleDoubleClick = (event) => {
    event.preventDefault()
    setPosFolderMenuAction({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    })
  }

  const handleListItemClick = (event, index) => {
    setFolderIdAction(index)
  }

  const handleChange = (event) => {
    const newData = _.cloneDeep(foldersList)
    setFolderAction(arrRenameFolder(newData, folderId, event.target.value))
    setfolderStatusInputAction(true)
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {foldersList.map((item) => (
          <ListItem
            key={uniqid()}
            button
            selected={folderId === item.id}
            onClick={(event) => handleListItemClick(event, item.id)}
            onDoubleClick={handleDoubleClick}
          >
            <ListItemText
              primary={
                <TextField
                  className={classes.rootInput}
                  defaultValue={item.name}
                  onBlur={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    disabled: folderStatusInput,
                    autoFocus: item.id === folderId !== false
                  }}
                />
              }
            />
          </ListItem>
        ))}
        <ContextMenu/>
      </List>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedListItem)

SelectedListItem.propTypes = {
  folderStatusInput: PropTypes.bool.isRequired,
  setfolderStatusInputAction: PropTypes.func.isRequired,
  setFolderAction: PropTypes.func.isRequired,
  foldersList: PropTypes.array.isRequired,
  setPosFolderMenuAction: PropTypes.func.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
