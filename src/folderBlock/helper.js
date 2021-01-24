import _ from 'lodash'
// func for add new folders
export const arrPusher = (arr) => {
  const uniqid = require('uniqid')
  arr.push({
    id: uniqid(),
    name: 'New Folder'
  })
  localStorage.setItem('arrFolders', JSON.stringify(arr))
  return (arr)
}
// func for remove folder
export const arrRemoveFolder = (arr, folderId) => {
  const newArr = _.filter(arr, function (item) { return item.id !== folderId })
  localStorage.setItem('arrFolders', JSON.stringify(newArr))
  return (newArr)
}
// func for change folder name
export const arrRenameFolder = (arr, folderId, value) => {
  const newArr = arr.map(function (item) {
    if (item.id === folderId) {
      return (
        {
          id: item.id,
          name: value
        }
      )
    } else {
      return (item)
    }
  })
  localStorage.setItem('arrFolders', JSON.stringify(newArr))
  return (newArr)
}
