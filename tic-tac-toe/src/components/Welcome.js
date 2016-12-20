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
