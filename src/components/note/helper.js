// func for change note value
export const arrChangeValueNote = (arr, Id, value) => {
  const newArr = arr.map(function (item) {
    if (item.id === Id) {
      return (
        {
          id: item.id,
          folderId: item.folderId,
          name: item.name,
          disableInput: true,
          noteValue: value,
          date: item.date,
          dateNote: item.dateNote
        }
      )
    } else {
      return (item)
    }
  })
  localStorage.setItem('arrNotes', JSON.stringify(newArr))
  return (newArr)
}
