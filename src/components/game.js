import React from "react";
import Board from "./board"



class Game extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      history : {
        squares : Array(9).fill(null)
      }
    }
  }
 

  render() {
    
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
