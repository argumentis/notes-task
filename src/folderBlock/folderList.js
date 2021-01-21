import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux'
import { setFolder, setFolderId} from '../reducersFolder/mainReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    width: '100%', 
    backgroundColor: theme.palette.background.paper,
  },
  rootInput: {
    '& .Mui-disabled': {
      color: 'black',
    }
  },
}));

const mapStateToProps = store => {
  const { foldersList, folderId} = store.main
  return {
    foldersList,
    folderId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderAction: foldersList => dispatch(setFolder(foldersList)),
    setFolderIdAction: folderId => dispatch(setFolderId(folderId))
  }
}

const initialState = {
  mouseX: null,
  mouseY: null,
};

function SelectedListItem(props) {
  const classes = useStyles()
  const { foldersList, folderId, setFolderIdAction } = props
  const [state, setState] = React.useState(initialState);
  const uniqid = require('uniqid')

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  const handleListItemClick = (event, index) => {
    setFolderIdAction(index)
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {foldersList.map((item) => (
          <ListItem
            key={uniqid()}
            button
            selected={folderId === item.id}
            onClick={(event) => handleListItemClick(event, item.id)}
            onDoubleClick={handleClick}
          >
            <ListItemText 
              primary={
                <TextField 
                  className={classes.rootInput}
                  defaultValue={`${item.name}`}
                  InputProps={{
                    disableUnderline: true,
                    disabled: true
                  }}
                />
              }
            />
          </ListItem>
        ))}
      </List>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Add folder</MenuItem>
        <MenuItem onClick={handleClose}>Rename folder</MenuItem>
        <MenuItem onClick={handleClose}>Delete folder</MenuItem>
      </Menu>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectedListItem)

SelectedListItem.propTypes = {
  foldersList: PropTypes.array.isRequired,
  setFolderIdAction: PropTypes.func.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
}
