
export function validMove(move, player, board){
  return function(dispatch){
    var newBoard = board.slice(0)
    if (newBoard[move] === ' '){
      newBoard[move] = player
      // if move is valid it returns a new board with the new move
      // on it.
      // Usually if you call this function you will need to check if
      // your value has entered the tempBoard to make sure it's valid
      dispatch({type: 'CHANGE_TEMP_BOARD', payload: newBoard}).then
      console.log("move was fucking valid")
      }else {
        console.log("did not change temp board")
        dispatch({type: 'CHANGE_TEMP_BOARD', payload: []})
      }
  }
}

export function winnerTest(currentGameBoard, player){
  return function(dispatch){
    debugger
    var winner = ""
    var newBoard = currentGameBoard.slice(0)
    var moves = newBoard.join('').replace(/ /g, '')
    if(
      (currentGameBoard[0] === player && currentGameBoard[1] === player && currentGameBoard[2] === player)||
      (currentGameBoard[3] === player && currentGameBoard[4] === player && currentGameBoard[5] === player)||
      (currentGameBoard[6] === player && currentGameBoard[7] === player && currentGameBoard[8] === player)||
      (currentGameBoard[0] === player && currentGameBoard[3] === player && currentGameBoard[6] === player)||
      (currentGameBoard[1] === player && currentGameBoard[4] === player && currentGameBoard[7] === player)||
      (currentGameBoard[2] === player && currentGameBoard[5] === player && currentGameBoard[8] === player)||
      (currentGameBoard[0] === player && currentGameBoard[4] === player && currentGameBoard[8] === player)||
      (currentGameBoard[2] === player && currentGameBoard[4] === player && currentGameBoard[6] === player)
      ){
      // make sure this works
      winner = player
      dispatch({type: 'DECLARE_WINNER', payload: player})
      }
    if (moves.length === 9 && winner === ""){
      winner = "cat"
      // make sure this works
      dispatch({type: 'DECLARE_WINNER', payload: winner})
    }
    console.log("there is no winner yet")
  }
}

export function gameLoop(move, player, gameType){
    // taking in so many things so it's a purer function
  return function(dispatch, getState){
  debugger
    // makes sure there is no tie or winners before continuing gameplay


  }
}

