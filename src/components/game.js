import React from "react";
import Board from "./board"



class Game extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      history : {
        squares : Array(9).fill(null)
      },
      step : 0,
      xIsNext : false
    }
  }
 
  handleClick(i){
    history = this.state.history
    current = history[history.length-1] //latest state array
    squares = current.squares // latest state of the board
  }

  render() {
    // todo pass this.state.squares to board
    return(
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <ol>
            <li>Instruction </li>
            <li>Instruction </li>
          </ol>
        </div>
      </div>
    )
  }

}

export default Game;
