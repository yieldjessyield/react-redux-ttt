import { findAiMove } from './AiActions'


export function validMove(move, player, board){
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
      dispatch(winnerTest(player, newBoard))

      console.log("move was valid")
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

export function winnerTest(player, board){
  return function(dispatch, getState){
    var winner = ""
    var currentGameBoard = board.slice(0)
    var moves = currentGameBoard.join('').replace(/ /g, '')
    var currentGameType = getState().gameType
    var otherPlayer = ""
    var roboTurn = getState().robotTurn

    if (player === "x"){
      otherPlayer = "o"
    } else {
      otherPlayer = "x"
    }

    // if there is a winner do what's below
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
          winner = player
          dispatch({type: 'DECLARE_WINNER', payload: player})
          dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
    }
    // if there is a tie do what's below
    else if (moves.length === 9 && winner === ""){
      winner = "cat"
      // make sure this works with AI
      dispatch({type: 'DECLARE_WINNER', payload: winner})
      dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
    }
    // else let human or computer decide move
    else {
      if (currentGameType === "hvh"){
        dispatch(humanGameLoop(player, currentGameBoard, currentGameType))
        console.log("there is no winner yet, let ur friend go.")
      }
      else if (currentGameType != "hvh" && roboTurn === false){
        debugger
        //check state here, maybe dispatch a update board? with humo moveo
        dispatch({type: 'ROBOT_TURN', payload: true})
        dispatch({type: 'CHANGE_PLAYER', payload: otherPlayer})
        dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
        dispatch(findAiMove(board))
        // dispatch(robotGameLoop(move, player, currentGameBoard, gameType))
        console.log("there is no winner yet, call the bots")
        }
      else if (currentGameType != "hvh" && roboTurn === true){
        debugger
        dispatch({type: 'HUMAN_TURN', payload: false})
        dispatch({type: 'CHANGE_PLAYER', payload: otherPlayer})
        dispatch({type: 'UPDATE_BOARD', payload: currentGameBoard})
        }
    } // closes if there is no winner "else"
  }
}



export function humanGameLoop(player, board, gameType){
  return function(dispatch){

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

