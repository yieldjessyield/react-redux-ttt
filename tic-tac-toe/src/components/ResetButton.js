import React, { Component } from 'react';

export default class ResetButton extends Component {

render(){
  return(
    <div>
      <section className="border">
      <button onClick={this.props.reset}>Reset</button>
      </section>
    </div>
    )
  }
}
