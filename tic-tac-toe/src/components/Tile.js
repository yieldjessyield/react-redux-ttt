import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { humanGameLoop, winnerTest, validMove } from '../actions/GameActions'
import '../Tile.css'

class Tile extends Component {


onTileClick(props){
    // check to see if a gameType has been chosen
  if (this.props.gameType[0] != undefined && typeof this.props.winner != 'string'){
      var gameType = this.props.gameType
      var newBoard = this.props.gameBoard
      var loc = this.props.loc
      var value = this.props.value
      // need to define turn in state
      var player = this.props.player[0]
      if (this.props.robotTurn === false){
        let not_valid = this.props.validMove(loc, player, newBoard, gameType)
          debugger
          if (typeof not_valid === 'string'){
            alert(not_valid)
          } else if (this.props.winner){
            alert("There's already a winner! Click reset to play again.")
            }
      }else{
        alert("Give a lil robot a chance!")
      }
    }else{
      alert("please reset or pick a gametype")
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
  return {gameBoard: state.gameBoard, player: state.player, gameType: state.gameType, winner: state.winner, tempBoard: state.tempBoard, robotTurn: state.robotTurn}
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ humanGameLoop: humanGameLoop, winnerTest: winnerTest, validMove: validMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)
