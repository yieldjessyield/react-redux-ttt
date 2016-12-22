import React, { Component } from 'react';
import '../Welcome.css'
export default class Welcome extends Component {

render(){
  return(
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>Game Over {this.props.winner} WINS!!!!!!</h2>
      </div>
    )
  }
}

    // <div>
    //   <div className={this.props.gameType ? 'hidden' : 'visible`'}>
    //     <button onClick={this.props.setGameType("hvh")}>Human Vs. Human</button>
    //     <button onClick={this.props.setGameType("hvm")}>Human Vs. Machine</button>
    //     <button onClick={this.props.setGameType("mvh")}>Machine Vs. Human</button>
    //   </div>
