import React, { Component } from 'react';

export default class GameButtons extends Component {

render(){
  return(
    <div>
      <button onClick={this.props.setGameType("hvh")}>Human Vs. Human</button>
      <button onClick={this.props.setGameType("hvm")}>Human Vs. Machine</button>
      <button onClick={this.props.setGameType("mvh")}>Machine Vs. Human</button>
    </div>
    )
  }
}
