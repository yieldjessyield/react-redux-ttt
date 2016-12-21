import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { humanGameLoop, winnerTest, validMove } from '../actions/GameActions'
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
    let valid = this.props.validMove(loc, player, newBoard)
      debugger
    // setTimeout(() => {
      if (valid === true){
        debugger
        newBoard[loc] = player
          // if move is valid it returns a new board with the new move on it
        this.props.winnerTest(newBoard, player)
          if (this.props.winner === null && gameType === "hvh"){
            this.props.humanGameLoop(loc, player, gameType)
          }else if (this.props.winner === null && gameType === "mvh" || gameType === "hvm"){
            this.props.robotGameLoop(loc, player, gameType)
          }else if (this.props.winner != null){
          debugger
            // test this alert
            alert("Game is done! Reset to play again!")
          }
      }else{
      alert("Someone's already there! Choose another spot wisely...")
      }
    // }, 1000)

  }else{
    alert("please pick a gametype")
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
  return bindActionCreators({ humanGameLoop: humanGameLoop, winnerTest: winnerTest, validMove: validMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)
