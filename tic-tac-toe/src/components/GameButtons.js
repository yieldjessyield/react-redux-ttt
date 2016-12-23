import React, { Component } from 'react';
import '../GameButtons.css'

export default class GameButtons extends Component {

// handleOnClick(event){
//   event.preventDefault()
//   debugger
//   this.props.setGameType(event.target.id)
// }

render(){
  return(
      <div className={this.props.gameType ? 'hidden' : 'visible`'}>
        <section className="border">
          <button id="hvh"onClick={this.props.setGameType}>Human Vs. Human</button>
          <button id="hvm"onClick={this.props.setGameType}>Human Vs. Machine</button>
          <button id="mvh"onClick={this.props.setGameType}>Machine Vs. Human</button>
        </section>
      </div>
    )
  }
}
