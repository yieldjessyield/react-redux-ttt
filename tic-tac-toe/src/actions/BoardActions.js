// possibly newBoard?

export function resetBoard(){
  return function(dispatch){
    let newBoard = [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ]
      let gameType = []
    dispatch({type: 'RESET_BOARD', payload: newBoard })
    dispatch({type: 'CHOOSE_GAME_TYPE', payload: gameType })
  }
}

export function chooseGameType(type){
  return function(dispatch){
    if (type === "hvh" || "mvh" || "hvm" ){
      dispatch({type: 'CHOOSE_GAME_TYPE', payload: type })
    }
  }
}

export function placeFirstMove(){
  return function(dispatch){
    let newBoard = [
        ' ', ' ', ' ',
        ' ', 'o', ' ',
        ' ', ' ', ' '
      ]
    dispatch({type: 'UPDATE_BOARD', payload: newBoard })
  }
}
