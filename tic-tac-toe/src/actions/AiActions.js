import { validMove, winnerTest } from './GameActions'

export function findAiMove(board){
  return function(dispatch, getState){
    var bestMoveScore = 100;
    let move = null
    var moveScore = 0
    // already checked for winners or ties before this is triggered so
    // no need here
    // let aiPlayer = getState().player

    // var isThereAWinner = new Promise(function(fulfill, reject){
    //   var isAWinner = dispatch(aiWinnerTest(board))
    //   if (isAWinner === true || isAWinner === false){
    //     fulfill(isAWinner)
    //   } else {
    //     reject(isAWinner)
    //   }
    // })

    // isThereAWinner.then(function(win){
    //   console.log("There Wa A winner")
    // }, function(win) {
    //   console.log("ur a loser")
    // })
    var player = getState().player
    var otherPlayer = ""
    if (player === "x"){
      otherPlayer = "o"
    } else {
      otherPlayer = "x"
    }
    var newBoard = board.slice(0)
    // start iterating though board and check if various moves are valid
    for (var i = 0; i < board.length; i++){
      // if a move is valid we send it to get a score
      let fancyBoard = dispatch(aiValidMove(i, otherPlayer, newBoard))
        debugger
      var fancyBoardPromise = new Promise(function(fulfill, reject){
        if (fancyBoard){
          fulfill(fancyBoard)
        } else {
          reject(fancyBoard)
        }
      })
    }

    fancyBoardPromise.then(function(yes){
      console.log("doing moveScoreStuffs")
    }, function(yes){
      console.log("blerg")
    })
  // debugger
  //     let fancyBoard = []
  //     if(fancyBoard){
  //       var moveScorePromise = new Promise(function(fulfill, reject){
  //         moveScore = dispatch(maxScore(fancyBoard))
  //         if (moveScore < bestMoveScore){
  //           fulfill(moveScore)
  //         } else {
  //           reject(moveScore)
  //         }
  //       })
  //     }

  //     moveScorePromise.then(function(win){
  //       bestMoveScore = moveScore
  //       move = i;
  //       }, function(win) {
  //         console.log("Nothin going on here folks")
  //       })
  //         //create a temp board with "minPlayer" (user's token)
  //         // dispatch(otherWinnerTest(tempBoard))
  //       debugger
  //       // dispatch(winnerTest(200, player, board, gameType))
  //       //send temp board to winner to check then
  //         // dispatch(maxScore(tempBoard))
  // //check what move is here
  // console.log(move)
  // debugger
    }
  }


export function maxScore(board){
  return function(dispatch, getState){
    let player = getState().player
    let gameType = getState().gameType
    var searchId = "maxfinder"
    return Math.floor(Math.random() * 103) + 1;
    // check if searchId is from minScore or findAi
      // then if from findAi then score for predictedMoveValue based on if it wins
      // else iterate through new board length
        // if value is valid then create a temp board with "maxPlayer" (Ai's token)
        // dispatch tempboard to minScore
  }
}

export function minScore(board){
  return function(dispatch, getState){
    // check if searchId is from minScore or findAi

  }
}

export function aiWinnerTest(board, thePlayer){
  return function(dispatch){
    var currentGameBoard = board.slice(0)
    var moves = currentGameBoard.join('').replace(/ /g, '')
    var player = thePlayer
    var winner = ""
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
    else if (moves.length === 9 && winner === ""){
      return true
    }else{
      return false
    }
  }
}

export function aiValidMove(move, player, board){
  return function(dispatch){
    var newBoard = board.slice(0)
      debugger
    if (newBoard[move] === ''){
      newBoard[move] = player
      return newBoard
    } else {
      return null
    }
  }
}





