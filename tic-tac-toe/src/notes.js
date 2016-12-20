// // old update board function

// updateBoard(loc, player){
//     if(this.state.gameBoard[loc] === "x" || this.state.gameBoard[loc] === "o" || this.state.winner){
//       // Invalid Move
//       return
//     }

//     let currentGameBoard = this.state.gameBoard

//     currentGameBoard.splice(loc, 1, this.state.turn)

//     this.setState({gameBoard: currentGameBoard})

//     let topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
//       if (topRow === "xxx" || topRow === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
//       if (middleRow === "xxx" || middleRow === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
//       if (bottomRow === "xxx" || bottomRow === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
//       if (leftCol === "xxx" || leftCol === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
//       if (middleCol === "xxx" || middleCol === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
//       if (rightCol === "xxx" || rightCol === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
//       if (leftDiag === "xxx" || leftDiag === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
//       if (rightDiag === "xxx" || rightDiag === "ooo"){
//         this.setState({winner: this.state.turn})
//         return
//     }

//     let moves = this.state.gameBoard.join('').replace(/ /g, '')
//     if (moves.length === 9){
//       this.setState({winner: 'd'})
//     }
//     this.setState({turn: (this.state.turn === 'x') ? 'o' : 'x'})
//   }

