import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import SelectedListItem from './folderList/index'
import IconLabelButtons from './newFolderButton/Index'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      display: 'flex',
      height: '95vh',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#f7f6f7',
      [theme.breakpoints.down('sm')]: {
        height: '100vh'
      }
    }
  }
}))

export default function LeftBlock () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper variant="outlined" square>
        <SelectedListItem/>
        <IconLabelButtons/>
      </Paper>
    </div>
  )
}
