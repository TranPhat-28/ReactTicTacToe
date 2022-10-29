import Board from "./Board";
import Information from "./Information";
import { useState } from "react";

const App = () => {

    //////////////////////////////////////
    // Game board state
    const [ boardState, setBoardState ] = useState([
        null, null, null,
        null, null, null,
        null, null, null
    ]);
    // Update game board when a cell is clicked
    const updateBoard = (player, index) => {
        const newBoard = boardState.slice(0);
        newBoard[index] = player;
        //console.log(newBoard)
        setBoardState(newBoard);
    }

    // Game history state
    const [ gameHistory, setGameHistory ] = useState([]);

    //////////////////////////////////////
    // Player
    const [ player, setPlayer ] = useState('X');
    // Set turn to next player
    const nextPlayer = () => {
        if (player === 'X'){
            setPlayer('O');
        }
        else if (player === 'O'){
            setPlayer('X');
        }
    }

    return(
        <div className="game-app">
            <Board boardState={boardState} player={player} nextPlayer={nextPlayer} updateBoard={updateBoard}/>
            <Information player={player}/>
        </div>
    );
}

export default App;