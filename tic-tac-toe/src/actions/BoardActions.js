// possibly newBoard?

export function resetBoard(){
  return function(dispatch){
    newBoard = [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ]
    dispatch({type: 'RESET_BOARD', payload: newBoard })
  }
}

