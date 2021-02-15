import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import NoteText from '../index'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f6f7',
    overflow: 'auto'
  },
  button: {
    width: '100%',
    height: '40px'
  }
}))

export default function NotesModal (props) {
  const classes = useStyles()
  const { setOpen, open } = props

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={setOpen}
      >
        <div className={classes.root}>
            <NoteText/>
            <Button className={classes.button} onClick={handleClose}>Save and Close</Button>
        </div>
      </Modal>
    </div>
  )
}

NotesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}
