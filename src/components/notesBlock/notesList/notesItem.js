import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'
import _ from 'lodash'
import { changeNote } from '../helper'
import ContextMenu from './contextMenu'
import NotesModal from '../../note/mobileVersionFiles/notesMobile'
import { connect } from 'react-redux'
import { setNotes, setNoteId } from '../../../reducersFolder/notesReducer'
import ButtonsBlockNotesMobil from './mobileVersionFiles/buttonsBlock'
import Hidden from '@material-ui/core/Hidden'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .Mui-selected': {
      backgroundColor: '#fde46e',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: 'transparent'
      }
    },
    '& .MuiListItemText-root': {
      width: '100%'
    },
    '& .MuiListItem-root': {
      paddingLeft: '20px',
      paddingRight: '20px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '16px',
        paddingRight: '16px'
      }
    }
  },
  rootInput: {
    display: 'flex',
    '& .Mui-focused': {
      backgroundColor: '#f7f6f7'
    },
    '& .Mui-disabled': {
      color: 'black'
    }
  },
  leftParth: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'
  }
}))

const mapStateToProps = store => {
  const { notesList, noteId } = store.notes
  return {
    notesList,
    noteId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNotesAction: notesList => dispatch(setNotes(notesList)),
    setNoteIdAction: noteId => dispatch(setNoteId(noteId))
  }
}

const initialState = {
  mouseX: null,
  mouseY: null
}

function NotesItem (props, event) {
  const classes = useStyles()
  const uniqid = require('uniqid')
  const { notesList, noteId, setNoteIdAction, setNotesAction, itemId, itemName, itemStatus, itemDate } = props
  const wrapperRef = useRef(null)
  const [contextMenu, setContextMenu] = useState(initialState)
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const handleOpen = () => {
    if (!open) return setOpen(true)
    return setOpen(false)
  }

  // func for change status input when click outside note item
  function useOutsideClose (ref) {
    useEffect(() => {
      function handleClickOutside (event) {
        if (ref.current && !ref.current.contains(event.target)) {
          const newData = _.cloneDeep(notesList)
          setNotesAction(changeNote('renameNote', newData, noteId, true, itemName))
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  // func for set selected folder
  const handleListItemClick = (event, index) => {
    if (noteId !== itemId) {
      setNoteIdAction(index)
    }
  }

  // func for set coordinates context menu
  const handleDoubleClick = (event) => {
    event.preventDefault()
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    })
  }

  // func for change value name note onChange
  const handleOnChange = (event) => {
    const newData = _.cloneDeep(notesList)
    setNotesAction(changeNote('renameNote', newData, noteId, itemStatus, event.target.value))
  }

  // monitors the state of input
  if (itemStatus === false) {
    useOutsideClose(wrapperRef)
  }

  return (
    <div ref={wrapperRef} className={classes.root}>
      <ListItem
        button
        onDoubleClick={ matches ? handleDoubleClick : handleOpen }
        selected={noteId === itemId}
        onClick={(event) => handleListItemClick(event, itemId)}
      >
        <div className={classes.leftParth}>
          <ListItemText
            primary={
              <TextField
                id={uniqid()}
                className={classes.rootInput}
                value={itemName}
                onChange={handleOnChange}
                InputProps={{
                  disableUnderline: true,
                  disabled: itemStatus,
                  autoFocus: true
                }}
              />
            }
          />
          <div>{itemDate}</div>
        </div>
        <Hidden mdUp>
          <ButtonsBlockNotesMobil currId={itemId}/>
        </Hidden>
      </ListItem>
      <NotesModal open={open} setOpen={setOpen}/>
      <ContextMenu
        posContextMenu={contextMenu}
        setPosContextMenu={setContextMenu}
      />
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesItem)

NotesItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemDate: PropTypes.string.isRequired,
  itemStatus: PropTypes.bool.isRequired,
  setNotesAction: PropTypes.func.isRequired,
  notesList: PropTypes.array.isRequired,
  setNoteIdAction: PropTypes.func.isRequired,
  noteId: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}
