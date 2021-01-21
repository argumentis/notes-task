export const arrPusher = (arr) => {
    const uniqid = require('uniqid')
    arr.push({
      id: uniqid(),
      name: 'New Folder',
    })
    localStorage.setItem('arrFolders', JSON.stringify(arr))
    return (arr)
  }
  