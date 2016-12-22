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
        // console.log("did not change temp board")
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

    var otherPlayer = ""
    if (player === "x"){
      otherPlayer = "o"
    } else {
      otherPlayer = "x"
    }

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
        }
        else if (getState().robotTurn === true && move === 200){
          // not sure if this is needed...
          dispatch({type: 'DECLARE_WINNER', payload: player})
          dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
        }
        else if (getState().robotTurn === true && move === 100){
          // maxfinder is using this
          // change state of move score = 10
        }
        else if (getState().robotTurn === true && move === -100){
          // minfinder is using this
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
      // make sure this works with AI
      dispatch({type: 'DECLARE_WINNER', payload: winner})
      dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
    }
    else {
      if (gameType === "hvh"){
        dispatch(humanGameLoop(move, player, currentGameBoard, gameType))
        console.log("there is no winner yet, let ur friend go.")
      }
      else if (gameType === "mvh" || gameType === "hvm"){
        if(getState().searchId === "aifinder"){
          // dispatch(maxScore(currentGameBoard))
        }
        else if(move === 100){
          // dispatch(minScore(currentGameBoard))
          //maybe dispatch a value here for pmvForMax state
        }
        else if(move === -100){
          // dispatch(maxScore(currentGameBoard))
          //maybe dispatch a value here for pmvForMin state
        } else {
          //check state here, maybe dispatch a update board? with humo moveo
          dispatch({type: 'ROBOT_TURN', payload: true})
          dispatch({type: 'CHANGE_PLAYER', payload: otherPlayer})
          dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
          dispatch(findAiMove(board))
          // dispatch(robotGameLoop(move, player, currentGameBoard, gameType))
          console.log("there is no winner yet, call the bots")
        }
      } // closes gameType mvh and hvm "else if"
    } // closes if there is no winner "else"
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

// going directly to find AI move :)

// export function robotGameLoop(move, player, board, gameType){
//   return function(dispatch, getState){
//     var loc = move
//     var currentPlayer = player
//     var typeOfGame = gameType
//     var currentBoard = board
//     var otherPlayer = ""

//     // if (currentPlayer === "x"){
//     //   otherPlayer = "o"
//     // } else {
//     //   otherPlayer = "x"
//     // }
//     debugger
//     // dispatch({type: 'ROBOT_TURN', payload: otherPlayer})
//     // dispatch({type: 'CHANGE_PLAYER', payload: otherPlayer})
//     dispatch(findAiMove(loc, otherPlayer, board, typeOfGame))
//   }
// }

