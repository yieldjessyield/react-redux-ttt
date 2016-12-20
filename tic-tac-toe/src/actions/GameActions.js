

export function gameLoop(move){
  return function(dispatch, getState){
    let player = getState().turn[0]
    //***need to build validMove
    let currentGameBoard = this.validMove(move, player, getState().gameBoard)
    //***need to build winner
    if(this.winner(currentGameBoard, player)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: player
      })
      //maybe rewrite, might need to do something else
      return
    }
    //***need to build tie
    if(this.tie(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: 'd'
      })
      //maybe rewrite, might need to do something else
      return
    }


  }
}

// dispatch({type: 'SAVE_ARTIST_INFO', payload: artistInfo})
