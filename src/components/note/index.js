import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NoteTime from './noteTime'
import NoteTextArea from './noteTextArea'
import _ from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      display: 'flex',
      height: '95vh',
      flexDirection: 'column',
      backgroundColor: '#f7f6f7',
      [theme.breakpoints.down('sm')]: {
        height: '90vh'
      }
    }
  }
}))

const mapStateToProps = store => {
  const { noteId, notesList } = store.notes

  return {
    noteId,
    notesList
  }
}

function NoteText (props) {
  const classes = useStyles()
  const { noteId, notesList } = props
  const uniqid = require('uniqid')
  const currItem = _.filter(notesList, function (item) { return item.id === noteId })

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        {currItem.map((item) => (
          <div key={uniqid()}>
            <NoteTime itemTime={item.dateNote}/>
            <NoteTextArea defaultValue={item.noteValue}/>
          </div>
        ))}
      </Paper>
    </div>
  )
}

export default connect(mapStateToProps)(NoteText)

NoteText.propTypes = {
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  notesList: PropTypes.array.isRequired
}
