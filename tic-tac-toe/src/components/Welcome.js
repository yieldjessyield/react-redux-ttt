import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import '../Welcome.css'

class Welcome extends Component {

render(){
  return(
    <div className={'welcome'}>
      <h1>welcome asshat</h1>
      <div className={this.props.winner ? 'visible' : 'hidden'}>
        <h2>Game Over {this.props.winner} WINS!!!!!!</h2>
      </div>
    </div>
    )
}

}

function mapStateToProps(state){
  return {gameBoard: state.gameBoard}
}

// function mapDispatchToProps(dispatch){
//   //return bindActionCreators({ new, create, delete}, dispatch)
// }

export default connect(mapStateToProps)(Welcome)
