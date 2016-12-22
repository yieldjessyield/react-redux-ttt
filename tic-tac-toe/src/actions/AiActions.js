import { validMove } from './GameActions'

export function findAiMove(move, player, board, gameType){
  return function(dispatch, getState){
    // already checked for winners or ties before this is triggered so
    // no need here
    var searchId = "aifinder"
    var newBoard = board.slice(0)
    dispatch({type:"SWITCH_TO_FINDER", payload: searchId})
    // start iterating though board and check if various moves are valid
    for (var i = 0; i < board.length; i++){
      // if a move is valid we send it to get a score
      if (newBoard[i] === ' '){
        newBoard[i] = player
        // dispatch(maxScore(newBoard))
      }
    }
    }
    debugger
  }

    //   console.log("move was fucking valid")
    //   // return true
    //   }


    // var bestMoveScore = 100;
    // let move = null
    // let currentBoard = board
    // for (var i = 0; i < currentBoard.length; i++){
    //   dispatch(validMove(i, this.state.minPlayer, currentBoard))
    //   let tempBoard = getState().tempBoard
    //   if(tempBoard){
    //     var moveScore = this.maxScore(tempBoard)
    //     if (moveScore < bestMoveScore){
    //       bestMoveScore = moveScore
    //       move = i;
    //     }
    //   }


// export function maxScore(board, player, )
