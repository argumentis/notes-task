import _ from 'lodash'

export const arrPusher = (arr) => {
  const uniqid = require('uniqid')
  arr.push({
    id: uniqid(),
    name: 'New Folder'
  })
  localStorage.setItem('arrFolders', JSON.stringify(arr))
  return (arr)
}

export const arrRemoveFolder = (arr, folderId) => {
  const newArr = _.filter(arr, function (item) { return item.id !== folderId })
  localStorage.setItem('arrFolders', JSON.stringify(newArr))
  return (newArr)
}
