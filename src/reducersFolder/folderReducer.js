const SET_FOLDER = 'SET_FOLDER'
const SET_FOLDER_ID = 'SET_FOLDER_ID'

const initialState = {
  foldersList: JSON.parse(localStorage.getItem('arrFolders')) || [],
  folderId: 0
}

export function folderReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FOLDER:
      return { ...state, foldersList: action.payload }

    case SET_FOLDER_ID:
      return { ...state, folderId: action.payload }

    default:
      return state
  }
}

export function setFolder (foldersList) {
  return {
    type: 'SET_FOLDER',
    payload: foldersList
  }
}

export function setFolderId (folderId) {
  return {
    type: 'SET_FOLDER_ID',
    payload: folderId
  }
}
