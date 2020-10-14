import React from "react";
import { calculateWinner } from "../utils/index";
import Square from "./square";

class Board extends React.Component {
  constructor(){
    super()
    this.state = {
      squares : Array(9).fill(null),
      xIsNext : true
    }
    
  }

  handleClick(i){
    // copy d'array :  immutable avec slice() ComponentShouldUpdate Composants purs #opti
    const squares = this.state.squares.slice()
    if (calculateWinner(squares) || squares[i]) {// court circuit
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'       
    this.setState({ 
      squares : squares,
      xIsNext : !this.state.xIsNext
    })
  }

  renderSquare(i){
    return (
      <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
            />
    ) 
  
  }

  render ( ) {
    const winner = calculateWinner(this.state.squares);
    let status
    if (winner) {
      status = "Player "+winner+" wins"
    }
    else {
      status =  "Next Player : " + (this.state.xIsNext ? 'X' : 'O')
    }
  
    return( 
      <div id="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="bord-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
      
    )
  }
}

export default Board;
