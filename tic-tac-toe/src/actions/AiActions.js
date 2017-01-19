import { validMove, winnerTest } from './GameActions'

export function findAiMove(board){
  return function(dispatch, getState){
    var bestMoveScore = 100;
    let move = null
    // already checked for winners or ties before this is triggered so
    // no need here
    debugger
    for (var i = 0; i < board.length; i++){
      let newBoard = aiValidMove(i, getState().player[0], board)
      debugger
      if(newBoard){
        debugger
        var moveScore = maxScore(newBoard, getState().player[0])
        // this is going to be in maxScore(whats below)
        if (moveScore < bestMoveScore){
          let bestMoveScore = moveScore
          let move = i;
        }
      }
    }
      debugger
    let aiBoard = board[move] = getState().player[0]
    dispatch(winnerTest(getState().player[0], aiBoard))
    // returns 1

}

function maxScore(board, currentPlayer){
    let maxPlayer = ""
    if (currentPlayer === "x"){
      let maxPlayer = "x"
    } else {
      let maxPlayer = "o"
    }
    if(aiWinner(board, 'x')){
      return 10
    } else if (aiWinner(board, 'o')){
      return -10
    } else if (aiTie(board)){
      return 0
    } else {
      var bestMoveValue = -100
      for(var i = 0; i < board.length; i++){
                      // can replace validMove with newBoard[move] === ' '
        let newBoard = aiValidMove(i, maxPlayer, board)
      if(newBoard){
        var predictedMoveValue = minScore(newBoard, currentPlayer)
        if (predictedMoveValue > bestMoveValue){
          bestMoveValue = predictedMoveValue
          }
        }
      }
      return bestMoveValue
    }
  }

function minScore(board, currentPlayer){
    let minPlayer = ""
    if (currentPlayer === "x"){
      let minPlayer = "x"
    } else {
      let minPlayer = "o"
    }
  if(aiWinner(board, 'x')){
    return 10
    } else if (aiWinner(board, 'o')){
      return -10
    } else if (aiTie(board)){
      return 0
    } else {
      // possibly refactor?
      // make minimising maximising function, takes in which player it
      // is and does the same thing?
      var bestMoveValue = 100
      for(var i = 0; i < board.length; i++){
        let newBoard = aiValidMove(i, minPlayer, board)
        if(newBoard){
          var predictedMoveValue = maxScore(newBoard, currentPlayer)
          if (predictedMoveValue < bestMoveValue){
            bestMoveValue = predictedMoveValue
          }
        }
      }
      return bestMoveValue
    }
  }
}

function aiValidMove(move, player, board){
  var newBoard = board.slice(0)
    if (newBoard[move] === ' '){
      newBoard[move] = player
      // if move is valid it returns a new board with the new move
      // on it
      return newBoard
    } else {
      return null
    }
  }

function aiWinner(board, player){
  var currentGameBoard = board.slice(0)
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
      return true
    }
    return false
}

function aiTie(board){
  var moves = board.join('').replace(/ /g, '')
  if (moves.length === 9){
      return true
    }
    return false
}


