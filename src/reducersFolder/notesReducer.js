const SET_NOTE = 'SET_NOTE'
const SET_NOTE_ID = 'SET_NOTE_ID'

const initialState = {
  notesList: JSON.parse(localStorage.getItem('arrNotes')) || [],
  noteId: 0
}

export function notesReducer (state = initialState, action) {
  switch (action.type) {
    case SET_NOTE:
      return { ...state, notesList: action.payload }

    case SET_NOTE_ID:
      return { ...state, noteId: action.payload }

    default:
      return state
  }
}

export function setNotes (notesList) {
  return {
    type: 'SET_NOTE',
    payload: notesList
  }
}

export function setNoteId (noteId) {
  return {
    type: 'SET_NOTE_ID',
    payload: noteId
  }
}
