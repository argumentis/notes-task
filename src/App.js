import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LeftBlock from './components/folderBlock/Index'
import CenterBlock from './components/notesBlock/Index'
import NoteText from './components/note/index'
import TopMenu from './components/topMenu/index'
import { DragDropContext } from 'react-beautiful-dnd'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { changeNote } from './components/notesBlock/helper'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from './reducersFolder/notesReducer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  topMenu: {
    margin: '1px 1px 0px 1px',
    display: 'flex'
  },
  main: {
    display: 'flex',
    height: '95vh'
  },
  center: {
    flex: '0 25%'
  },
  right: {
    flex: '1 50%'
  }
}))

const mapStateToProps = store => {
  const { notesList, noteId } = store.notes
  const { folderId } = store.folder
  return {
    notesList,
    noteId,
    folderId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNotesAction: notesList => dispatch(setNotes(notesList)),
    setNoteIdAction: noteId => dispatch(setNoteId(noteId))
  }
}

function App (props) {
  const [folderListDisplay, setFolderListDisplay] = useState('block')
  const { setNotesAction, notesList, setNoteIdAction } = props
  const classes = useStyles()

  // func for change folder id from note when DRAG ended
  const handleOnDragEnd = (result) => {
    console.log(result)
    const { combine, draggableId } = result
    if (combine) {
      const newData = _.cloneDeep(notesList)
      setNotesAction(changeNote('changeFolderId', newData, draggableId, true, combine.draggableId))
      setNoteIdAction(0)
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
    <div className={classes.root}>
      <div className={classes.topMenu}>
        <TopMenu folderListDisplay={folderListDisplay} setFolderListDisplay={setFolderListDisplay}/>
      </div>
      <div className={classes.main}>
        <div style={{ flex: '0 25%', display: folderListDisplay }}><LeftBlock/></div>
        <div className={classes.center}><CenterBlock/></div>
        <div className={classes.right}><NoteText/></div>
      </div>
    </div>
    </DragDropContext>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

App.propTypes = {
  setNotesAction: PropTypes.func.isRequired,
  notesList: PropTypes.array.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
