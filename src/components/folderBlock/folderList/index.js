import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { connect } from 'react-redux'
import FolderItem from './folderItem'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'auto',
    backgroundColor: 'none'
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
      <Droppable droppableId="droppableFolder" isCombineEnabled>
        {(provided) => (
          <List
            className="characters"
            component="nav"
            aria-label="main mailbox folders"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {foldersList.map((item, index) => (
              <Draggable index={index} draggableId={item.id} key={item.id} type="TASK">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                  >
                    <FolderItem
                      key={uniqid()}
                      index={index}
                      itemId={item.id}
                      itemName={item.name}
                      itemStatus={item.disableInput}
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
)(SelectedListItem)

SelectedListItem.propTypes = {
  foldersList: PropTypes.array.isRequired
}
