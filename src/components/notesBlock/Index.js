import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import SelectedListItem from './notesList'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      display: 'flex',
      height: '95vh',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f7f6f7'
    }
  }
}))

export default function CenterBlock () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <SelectedListItem style={{}}/>
      </Paper>
    </div>
  )
}
