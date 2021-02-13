import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { connect } from 'react-redux'
import NotesItem from './notesItem'
import _ from 'lodash'
import { Droppable, Draggable } from 'react-beautiful-dnd'

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

function SelectedListItemNotes (props) {
  const classes = useStyles()
  const { notesList, folderId, currFolderId } = props
  const uniqid = require('uniqid')
  const filterRules = !currFolderId ? folderId : currFolderId
  const init = _.filter(notesList, function (item) { return item.folderId === filterRules })

  return (
    <div className={classes.root}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <List
            className="characters"
            component="nav"
            aria-label="main mailbox folders"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {init.map((item, index) => (
              <Draggable
                index={index}
                draggableId={item.id}
                key={item.id}
                type="TASK"
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <NotesItem
                      key={uniqid()}
                      itemId={item.id}
                      itemName={item.name}
                      itemStatus={item.disableInput}
                      itemDate={item.date}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </div>
  )
}

export default connect(
  mapStateToProps
)(SelectedListItemNotes)

SelectedListItemNotes.propTypes = {
  currFolderId: PropTypes.string,
  notesList: PropTypes.array.isRequired,
  folderId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
