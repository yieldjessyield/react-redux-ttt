import { validMove } from './GameActions'

export function findAiMove(move, player, board, gameType){
  return function(dispatch, getState){
    var bestMoveScore = 100;
    let move = null
    let currentBoard = board
    for (var i = 0; i < currentBoard.length; i++){
      dispatch(validMove(i, this.state.minPlayer, currentBoard))
      let tempBoard = getState().tempBoard
      if(tempBoard){
        var moveScore = this.maxScore(tempBoard)
        if (moveScore < bestMoveScore){
          bestMoveScore = moveScore
          move = i;
        }
      }
    }
    debugger
  }
}
