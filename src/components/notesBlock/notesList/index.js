import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { connect } from 'react-redux'
import NotesItem from './notesItem'
import _ from 'lodash'
import { Droppable, DragDropContext } from 'react-beautiful-dnd'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    backgroundColor: 'none',
    height: '95vh',
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
  const [characters, updateCharacters] = useState([])
  useEffect(() => {
    const init = _.filter(notesList, function (item) { return item.folderId === folderId })
    updateCharacters(init)
  }, [folderId, notesList])

  function handleOnDragEnd (result) {
    if (!result.destination) return
    const items = Array.from(characters)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    return updateCharacters(items)
  }

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <List
              className="characters"
              component="nav"
              aria-label="main mailbox folders"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map((item, index) => (
                <NotesItem
                  key={uniqid()}
                  index={index}
                  itemId={item.id}
                  itemName={item.name}
                  itemStatus={item.disableInput}
                  itemDate={item.date}
                />
              ))}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
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
