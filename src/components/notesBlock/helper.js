import _ from 'lodash'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric'
}
// func for add new note
export const arrPusher = (arr, folderId) => {
  const uniqid = require('uniqid')
  const date = new Date()
  arr.push({
    id: uniqid(),
    folderId: folderId,
    name: 'New Note',
    disableInput: true,
    date: date.toLocaleDateString(),
    dateNote: date.toLocaleString('en-US', options)
  })
  localStorage.setItem('arrNotes', JSON.stringify(arr))
  return (arr)
}
// func for remove note
export const arrRemoveNote = (arr, noteId) => {
  const newArr = _.filter(arr, function (item) { return item.id !== noteId })
  localStorage.setItem('arrNotes', JSON.stringify(newArr))
  return (newArr)
}
// func for change note
export const changeNote = (type, arr, Id, status, value) => {
  const newArr = arr.map(function (item) {
    if (item.id === Id) {
      return (
        {
          id: item.id,
          folderId: type === 'changeFolderId' ? value : item.folderId,
          name: type === 'renameNote' ? value : item.name,
          disableInput: status,
          noteValue: type === 'changeNoteValue' ? value : item.noteValue || '',
          date: item.date,
          dateNote: item.dateNote
        }
      )
    }
    return (item)
  })
  localStorage.setItem('arrNotes', JSON.stringify(newArr))
  return (newArr)
}
