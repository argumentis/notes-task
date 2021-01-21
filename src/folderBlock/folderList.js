import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import ContextMenu from './contextMenu'
import { connect } from 'react-redux'
import { setFolder, setFolderId, setPosFolderMenu } from '../reducersFolder/mainReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  rootInput: {
    '& .Mui-disabled': {
      color: 'black'
    }
  }
}))

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
function SelectedListItem (props) {
  const classes = useStyles()
  const { foldersList, folderId, setFolderIdAction, setPosFolderMenuAction } = props
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
                  defaultValue={`${item.name}`}
                  InputProps={{
                    disableUnderline: true,
                    disabled: false
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
  foldersList: PropTypes.object.isRequired,
  setPosFolderMenuAction: PropTypes.func.isRequired,
  folderContextMenu: PropTypes.array.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
