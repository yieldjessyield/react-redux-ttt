import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { gameLoop, winnerTest, validMove } from '../actions/GameActions'
import '../Tile.css'

class Tile extends Component {


onTileClick(props){
  // check to see if a gameType has been chosen
  if (this.props.gameType[0] != undefined){
    var gameType = this.props.gameType
    var newBoard = this.props.gameBoard
    var loc = this.props.loc
    var value = this.props.value
    // need to define turn in state
    var player = this.props.player[0]
    this.props.validMove(loc, player, newBoard)
      debugger
    // setTimeout(() => {
      if (this.props.tempBoard[loc] === value){
      debugger
        newBoard[loc] = player
          // if move is valid it returns a new board with the new move on it
        this.props.winnerTest(newBoard, player)
          if (this.props.winner === null){
            this.props.gameLoop(loc, player, gameType)
          }else {
          debugger
            // test this alert
            alert("Someone's already there! Choose another spot wisely...")
          }
      }else{
      alert("Please Choose A Game Type!")
      }
    // }, 1000)

  }
}

render(){
  return(
    <div className={"tile " + this.props.loc} onClick={this.onTileClick.bind(this)}>
      <p> {this.props.value}</p>
    </div>
    )
}

}

function mapStateToProps(state){
  return {gameBoard: state.gameBoard, player: state.player, gameType: state.gameType, winner: state.winner, tempBoard: state.tempBoard}
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ gameLoop: gameLoop, winnerTest: winnerTest, validMove: validMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)
