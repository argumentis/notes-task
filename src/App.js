import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LeftBlock from './components/folderBlock/Index'
import CenterBlock from './components/notesBlock/Index'
import NoteText from './components/note/index'
import TopMenu from './components/topMenu/index'
import { DragDropContext } from 'react-beautiful-dnd'

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

function App () {
  const [folderListDisplay, setFolderListDisplay] = useState('block')
  const classes = useStyles()

  const handleOnDragEnd = (result, e) => {
    console.log(result)
    // const { destination } = result

    // if (!destination) {
    //   return
    // }
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

export default App
