import _ from 'lodash'
// func for add new folders
export const arrPusher = (arr) => {
  const uniqid = require('uniqid')
  arr.push({
    id: uniqid(),
    name: 'New Folder',
    disableInput: true
  })
  localStorage.setItem('arrFolders', JSON.stringify(arr))
  return (arr)
}
// func for remove folder
export const arrRemoveFolder = (arrFolders, arrNotes, folderId) => {
  const newArr = _.filter(arrFolders, function (item) { return item.id !== folderId })
  const newArrNotes = _.filter(arrNotes, function (item) { return item.folderId !== folderId })
  localStorage.setItem('arrFolders', JSON.stringify(newArr))
  localStorage.setItem('arrNotes', JSON.stringify(newArrNotes))
  return (newArr)
}
// func for change folder
export const changeFolder = (type, arr, folderId, status, value) => {
  const newArr = arr.map(function (item) {
    if (item.id === folderId) {
      return (
        {
          id: item.id,
          name: type === 'renameFolder' ? value : item.name,
          disableInput: status
        }
      )
    }
    return (item)
  })
  localStorage.setItem('arrFolders', JSON.stringify(newArr))
  return (newArr)
}
