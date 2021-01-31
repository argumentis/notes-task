import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { connect } from 'react-redux'
import NotesItem from './notesItem'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    backgroundColor: 'none',
    '& > *': {
      padding: '0px',
      width: '100%'
    }
  }
}))

const mapStateToProps = store => {
  const { notesList } = store.notes
  const { folderId } = store.folder
  return {
    notesList,
    folderId
  }
}

function SelectedListItem (props) {
  const classes = useStyles()
  const { notesList, folderId } = props
  const uniqid = require('uniqid')

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {_.filter(notesList, function (item) { return item.folderId === folderId }).map((item) => (
          <NotesItem
            key={uniqid()}
            itemId={item.id}
            itemName={item.name}
            itemStatus={item.disableInput}
            itemDate={item.date}
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
  notesList: PropTypes.array.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
