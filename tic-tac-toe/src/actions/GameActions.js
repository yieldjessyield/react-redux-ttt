import { findAiMove } from './AiActions'


export function validMove(move, player, board, gameType){
  return function(dispatch){
    var newBoard = board.slice(0)
    if (newBoard[move] === ' '){
      newBoard[move] = player
      // if move is valid it returns a new board with the new move
      // on it.
      // Usually if you call this function you will need to check if
      // your value has entered the tempBoard to make sure it's valid
      // dispatch({type: 'UPDATE_BOARD', payload: newBoard})
      // dispatch({type: 'CHANGE_VALID_MOVE', payload: move})
      dispatch(winnerTest(move, player, newBoard, gameType))

      console.log("move was fucking valid")
      // return true
      }else {
        let error = "Someone's already there! Choose another spot wisely..."
        return error
        console.log("did not change temp board")
        // dispatch({type: 'CHANGE_TEMP_BOARD', payload: []})
        // return false
      }
  }
}

export function winnerTest(move, player, board, gameType){
  return function(dispatch, getState){
    var winner = ""
    var currentGameBoard = board.slice(0)
    var moves = currentGameBoard.join('').replace(/ /g, '')

    // var otherPlayer = ""
    // if (player === "x"){
    //   otherPlayer = "o"
    // } else {
    //   otherPlayer = "x"
    // }

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
        if (getState().robotTurn === false){
          winner = player
          dispatch({type: 'DECLARE_WINNER', payload: player})
          dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
        }else if (getState().robotTurn === true && getState().searchId === "aifinder"){
          // dispatch(maxScore(currentGameBoard))
        }else if (getState().robotTurn === true && getState().searchId === "maxfinder"){
          // change state of move score = 10
        }else if (getState().robotTurn === true && getState().searchId === "minfinder"){
          // change state of predicted move value = 10
        }
    }
    // else if (
    //   (currentGameBoard[0] === otherPlayer && currentGameBoard[1] === otherPlayer && currentGameBoard[2] === otherPlayer)||
    //   (currentGameBoard[3] === otherPlayer && currentGameBoard[4] === otherPlayer && currentGameBoard[5] === otherPlayer)||
    //   (currentGameBoard[6] === otherPlayer && currentGameBoard[7] === otherPlayer && currentGameBoard[8] === otherPlayer)||
    //   (currentGameBoard[0] === otherPlayer && currentGameBoard[3] === otherPlayer && currentGameBoard[6] === otherPlayer)||
    //   (currentGameBoard[1] === otherPlayer && currentGameBoard[4] === otherPlayer && currentGameBoard[7] === otherPlayer)||
    //   (currentGameBoard[2] === otherPlayer && currentGameBoard[5] === otherPlayer && currentGameBoard[8] === otherPlayer)||
    //   (currentGameBoard[0] === otherPlayer && currentGameBoard[4] === otherPlayer && currentGameBoard[8] === otherPlayer)||
    //   (currentGameBoard[2] === otherPlayer && currentGameBoard[4] === otherPlayer && currentGameBoard[6] === otherPlayer)
    //   ){
    //   // make sure this works
    //   winner = player
    //   dispatch({type: 'DECLARE_WINNER', payload: player})
    //   dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
    //   }

    else if (moves.length === 9 && winner === ""){
      winner = "cat"
      // make sure this works
      dispatch({type: 'DECLARE_WINNER', payload: winner})
      dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
    } else {
      if (gameType === "hvh"){
        dispatch(humanGameLoop(move, player, currentGameBoard, gameType))
        console.log("there is no winner yet, let ur friend go.")
      } else {
        // this is specificaly for "rvh"
        dispatch(robotGameLoop(move, player, currentGameBoard, gameType))
        console.log("there is no winner yet, call the bots")
      }

    }

  }
}



export function humanGameLoop(move, player, board, gameType){
  return function(dispatch){

    var loc = move
    var currentPlayer = player
    // var gameTypes = gameType
    var Currentboard = board
    var otherPlayer = ""

    if (currentPlayer === "x"){
      otherPlayer = "o"
    } else {
      otherPlayer = "x"
    }
    dispatch({type: 'CHANGE_PLAYER', payload: otherPlayer})
    dispatch({type: 'UPDATE_BOARD', payload: Currentboard})
  }
}

export function robotGameLoop(move, player, board, gameType){
  return function(dispatch, getState){
    var loc = move
    var currentPlayer = player
    var typeOfGame = gameType
    var currentBoard = board
    var otherPlayer = ""

    if (getState().robotTurn === false){
      dispatch(humanGameLoop(loc, currentPlayer, currentBoard, typeOfGame))
    }

    if (currentPlayer === "x"){
      otherPlayer = "o"
    } else {
      otherPlayer = "x"
    }
    debugger
    dispatch({type: 'ROBOT_TURN', payload: otherPlayer})
    dispatch({type: 'CHANGE_PLAYER', payload: otherPlayer})
    dispatch(findAiMove(loc, otherPlayer, board, typeOfGame))
  debugger
  }
}

