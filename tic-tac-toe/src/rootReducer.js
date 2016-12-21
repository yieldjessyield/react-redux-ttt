import { combineReducers } from 'redux'

function reducerGameType(state=[], action){
  switch (action.type){
    //*** need to write something that calls this
      //should be called when you choose human vs human
      //passes in "hvh"
    case "CHOOSE_GAME_TYPE":
      return action.payload
    //*** need to write something that calls this
      //should be called when you choose human vs human
      //passes in "hvm", "hvh", or "mvh"
    default:
      return state
  }
}

function reducerBoard(state= [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ], action){
  switch (action.type){
    //*** need to write something that calls this
      //should be called when you start a new game
    case "RESET_BOARD":
      return [...action.payload]
      // also could use [].concat(action.payload)
    //*** need to write something that calls this
    case "UPDATE_BOARD":
      return [...action.payload]
    default:
      return state
  }
}

function reducerPlayer(state= ["x"], action){
  switch (action.type){
    //*** need to write something that calls this
      //should be called when you run game loop on HvH game
      // not called with AI v H
    case "CHANGE_PLAYER":
      return [...action.payload]
      // also could use [].concat(action.payload)
    //*** need to write something that calls this
      // should be called when you start game with H v AI
    case "SET_X":
      return [...action.payload]
    default:
      return state
  }
}

function reducerWinner(state= null, action){
  switch (action.type){
    //*** need to write something that calls this
      //should be called by tie or winner
      //changes string to "x", "o", or "cat"
    case "DECLARE_WINNER":
      return action.payload
    default:
      return state
  }
}

function reducerValidMove(state= [], action){
  switch (action.type){
    case "CHANGE_TEMP_BOARD":
      return action.payload
    default:
      return state
  }
}


const appReducer = combineReducers({
  gameBoard: reducerBoard, player: reducerPlayer, winner: reducerWinner, gameType: reducerGameType, tempBoard: reducerValidMove
})
// add in later , maxPlayer: reducerMaxPlayer, minPlayer: reducerMinPlayer

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
