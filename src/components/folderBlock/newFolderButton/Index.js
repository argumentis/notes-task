import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { connect } from 'react-redux'
import { setFolder } from '../../../reducersFolder/folderReducer'
import { arrPusher } from '../helper'
import _ from 'lodash'

const useStyles = makeStyles(() => ({
  root: {
    textTransform: 'none',
    fontWeight: 'bold',
    width: '100%',
    display: '  flex',
    justifyContent: 'flex-start',
    paddingLeft: '15px'
  }
}))

const mapStateToProps = store => {
  const { foldersList } = store.folder
  return {
    foldersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFolderAction: foldersList => dispatch(setFolder(foldersList))
  }
}

function IconLabelButtons (props) {
  const classes = useStyles()
  const { foldersList, setFolderAction } = props
  const newData = _.cloneDeep(foldersList)

  // func for add folder to array
  const handleButtonClick = () => {
    setFolderAction(arrPusher(newData))
  }

  return (
    <div className={classes.buttonStyle}>
      <Button
        className={classes.root}
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleButtonClick}
      >
        New Folder
      </Button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IconLabelButtons)

IconLabelButtons.propTypes = {
  foldersList: PropTypes.array.isRequired,
  setFolderAction: PropTypes.func.isRequired
}
