import React, { Component } from 'react';
import '../Tile.css'

export default class Tile extends Component {

tileClick(props){
  if (props.gameType === 'hvh'){
    props.hvhGameLoop(props.loc)
  }
  else if (props.gameType === 'hvm'){
    props.hvmGameLoop(props.loc)
  }
  else if (props.gameType === 'mvh'){
    props.mvhGameLoop(props.loc)
  } else {
    alert("Please Pick A Game Type!")
  }
}

render(){
  return(
    <div className={"tile " + this.props.loc} onClick={() => this.tileClick(this.props)}>
      <p> {this.props.value}</p>
    </div>
    )
}

}
