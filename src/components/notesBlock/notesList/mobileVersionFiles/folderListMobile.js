import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { connect } from 'react-redux'
import NotesItem from '../notesItem'
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

function NotesListMobile (props) {
  const classes = useStyles()
  const { notesList, currFolderId } = props
  const uniqid = require('uniqid')
  const init = _.filter(notesList, function (item) { return item.folderId === currFolderId })

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
      >
        {init.map((item, index) => (
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
)(NotesListMobile)

NotesListMobile.propTypes = {
  currFolderId: PropTypes.string,
  notesList: PropTypes.array.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
