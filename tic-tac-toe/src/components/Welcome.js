import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { chooseGameType, placeFirstMove } from '../actions/BoardActions'
import '../Welcome.css'

class Welcome extends Component {

  onButtonClick(props){
    if (props.target.id != "mvh"){
    this.props.chooseGameType(props.target.id)
    }else{
      this.props.chooseGameType(props.target.id)
      this.props.placeFirstMove()
      //something that triggers machine to go ?
    }

  }

  render(){
    return(
      <div className={'welcome'}>
        <h1>X always goes first!</h1>
        <h5>unless you are a robot...</h5>
        <div className={this.props.gameType[0] ? 'hidden' : 'visible'}>
          <button id={"hvh"} onClick={this.onButtonClick.bind(this)} >Human Vs. Human</button>
          <button id={"hvm"} onClick={this.onButtonClick.bind(this)} >Human Vs. Machine</button>
          <button id={"mvh"} onClick={this.onButtonClick.bind(this)} >Machine Vs. Human</button>
        </div>
        <div className={this.props.winner ? 'visible' : 'hidden'}>
          <h2>Game Over {this.props.winner} WINS!!!!!!</h2>
        </div>
      </div>
      )
  }

}

function mapStateToProps(state){
  return {gameBoard: state.gameBoard, gameType: state.gameType}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ chooseGameType: chooseGameType, placeFirstMove: placeFirstMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
