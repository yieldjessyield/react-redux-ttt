import { combineReducers } from 'redux'

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

function reducerTurn(state= [], action){
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
    case "CHANGE_WINNER":
      return action.payload
    default:
      return state
  }
}




const appReducer = combineReducers({
  gameBoard: reducerBoard, turn: reducerTurn, winner: reducerWinner
})
// add in later , maxPlayer: reducerMaxPlayer, minPlayer: reducerMinPlayer

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
