import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { connect } from 'react-redux'
import FolderItem from './folderItem'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    width: '100%',
    backgroundColor: 'none',
    paddingTop: '0px'
  }
}))

const mapStateToProps = store => {
  const { foldersList } = store.folder
  return {
    foldersList
  }
}

function SelectedListItem (props) {
  const classes = useStyles()
  const { foldersList } = props
  const uniqid = require('uniqid')

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
          {foldersList.map((item, index) => (
            <FolderItem
              key={uniqid()}
              itemId={item.id}
              itemName={item.name}
              itemStatus={item.disableInput}
            />
          ))}
      </List>
    </div>
  )
}

export default connect(
  mapStateToProps
)(SelectedListItem)

SelectedListItem.propTypes = {
  foldersList: PropTypes.array.isRequired
}
