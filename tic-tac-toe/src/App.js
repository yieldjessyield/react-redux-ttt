import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome'
import ResetButton from './components/ResetButton'
import Tile from './components/Tile'
import GameButtons from './components/GameButtons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: "x",
      winner: null,
      maxPlayer: 'x',
      minPlayer: 'o',
      gameType: 'none'
    }
  }

  resetBoard(){
    this.setState({
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: "x",
      winner: null,
      maxPlayer: 'x',
      minPlayer: 'o'
    })
  }

  setGameType(newGameType){
    this.setState({
      gameType: newGameType
    })
  }

  tie(board){
    var moves = board.join('').replace(/ /g, '')
    if(moves.length === 9){
      return true
    }
    return false
  }

  winner(board, player){
    // debugger
    if(
      (board[0] === player && board[1] === player && board[2] === player)||
      (board[3] === player && board[4] === player && board[5] === player)||
      (board[6] === player && board[7] === player && board[8] === player)||
      (board[0] === player && board[3] === player && board[6] === player)||
      (board[1] === player && board[4] === player && board[7] === player)||
      (board[2] === player && board[5] === player && board[8] === player)||
      (board[0] === player && board[4] === player && board[8] === player)||
      (board[2] === player && board[4] === player && board[6] === player)
      ){
      return true
    } else {
      return null
      // this might be problem
    }
  }

  copyBoard(board){
    return board.slice(0)
  }

  validMove(move, player, board){
    var newBoard = this.copyBoard(board)
    if (newBoard[move] === ' '){
      newBoard[move] = player
      return newBoard
    } else {
      return null
    }
  }

  // need to build tie(board)

  findAiMove(board){
    var bestMoveScore = 100;
    let move = null
    if (this.winner(board, 'x') || this.winner(board, 'o') || this.tie(board)){
      return null
    }
    for (var i = 0; i < board.length; i++){
      let newBoard = this.validMove(i, this.state.minPlayer, board)
      if(newBoard){
        var moveScore = this.maxScore(newBoard)
        if (moveScore < bestMoveScore){
          bestMoveScore = moveScore
          move = i;
        }
      }
    }
    return move
  }

  minScore(board){
    if(this.winner(board, 'x')){
      return 10
    } else if (this.winner(board, 'o')){
      return -10
    } else if (this.tie(board)){
      return 0
    } else {
      // possibly refactor?
      // make minimising maximising function, takes in which player it
      // is and does the same thing?
      var bestMoveValue = 100
      for(var i = 0; i < board.length; i++){
        let newBoard = this.validMove(i, this.state.minPlayer, board)
      if(newBoard){
        var predictedMoveValue = this.maxScore(newBoard)
        if (predictedMoveValue < bestMoveValue){
          bestMoveValue = predictedMoveValue
          }
        }
      }
      return bestMoveValue
    }
  }

  maxScore(board){
    if(this.winner(board, 'x')){
      return 10
    } else if (this.winner(board, 'o')){
      return -10
    } else if (this.tie(board)){
      return 0
    } else {
      // possibly refactor?
      // make minimising maximising function, takes in which player it
      // is and does the same thing?
      var bestMoveValue = -100
      for(var i = 0; i < board.length; i++){
        let newBoard = this.validMove(i, this.state.maxPlayer, board)
      if(newBoard){
        var predictedMoveValue = this.minScore(newBoard)
        if (predictedMoveValue > bestMoveValue){
          bestMoveValue = predictedMoveValue
          }
        }
      }
      return bestMoveValue
    }
  }

  gameLoop(move){
    let player = this.state.turn
    let currentGameBoard = this.validMove(move, player, this.state.gameBoard)
    if(this.winner(currentGameBoard, player)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: player
      })
      return
    }
    if(this.tie(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: 'd'
      })
      return

    }
    player = 'o'
    currentGameBoard = this.validMove(this.findAiMove(currentGameBoard), player, currentGameBoard)
    if(this.winner(currentGameBoard, player)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: player
      })
      return
    }
    if(this.tie(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: 'd'
      })
      return
    }
    this.setState({
      gameBoard: currentGameBoard
    })
  }



  render() {
    return (
      <div className="container">
        <div className="menu">
          <h2>Welcome to Jess Tic Tac Toe!</h2>
          < Welcome winner={this.state.winner} gameType={this.state.gameType} setGameType={this.setGameType.bind(this)} />
          // < GameButtons setGameType={this.setGameType.bind(this)}/>
          < ResetButton reset={this.resetBoard.bind(this)}/>
        </div>
        {this.state.gameBoard.map(function(value, i){
          return(
          < Tile key={i} loc={i} value={value} gameLoop={this.gameLoop.bind(this)} />
            )
        }.bind(this))}
      </div>
    )
  }
}

export default App;
