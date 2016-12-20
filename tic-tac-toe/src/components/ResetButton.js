import React, { Component } from 'react';

export default class ResetButton extends Component {

render(){
  return(
    <div>
      <button onClick={this.props.reset}>Reset</button>
    </div>
    )
  }
}
