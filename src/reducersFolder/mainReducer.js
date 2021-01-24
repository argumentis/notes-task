const SET_FOLDER = 'SET_FOLDER'
const SET_FOLDER_ID = 'SET_FOLDER_ID'
const SET_SWITCH_FOLDER_INPUT = 'SET_SWITCH_FOLDER_INPUT'
const SET_FOLDER_MENU_POSITION = 'SET_FOLDER_MENU_POSITION'

const initialState = {
  foldersList: JSON.parse(localStorage.getItem('arrFolders')) || [],
  folderId: 0,
  folderContextMenu: {
    mouseX: null,
    mouseY: null
  },
  folderStatusInput: true
}

export function mainReducer (state = initialState, action) {
  switch (action.type) {
    case SET_FOLDER:
      return { ...state, foldersList: action.payload }

    case SET_FOLDER_ID:
      return { ...state, folderId: action.payload }

    case SET_FOLDER_MENU_POSITION:
      return { ...state, folderContextMenu: action.payload }

    case SET_SWITCH_FOLDER_INPUT:
      return { ...state, folderStatusInput: action.payload }

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

export function setPosFolderMenu (folderContextMenu) {
  return {
    type: 'SET_FOLDER_MENU_POSITION',
    payload: folderContextMenu
  }
}

export function setfolderStatusInput (folderStatusInput) {
  return {
    type: 'SET_SWITCH_FOLDER_INPUT',
    payload: folderStatusInput
  }
}
