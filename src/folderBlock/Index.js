import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import SelectedListItem from './folderList'
import IconLabelButtons from './newFolderButton/Index'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(95),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
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
