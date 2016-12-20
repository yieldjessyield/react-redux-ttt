import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { gameLoop } from '../actions/GameActions'
import '../Tile.css'

class Tile extends Component {

tileClick(props){
  // debugger
  let loc = this.props.loc
  let value = this.props.value
  console.log(loc)
  console.log(value)
  // this.props.gameLoop(props.loc, )
}

render(){
  return(
    <div className={"tile " + this.props.loc} onClick={this.tileClick.bind(this)}>
      <p> {this.props.value}</p>
    </div>
    )
}

}

function mapStateToProps(state){
  return {gameBoard: state.gameBoard}
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ gameLoop: gameLoop }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)
