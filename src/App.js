import Board from "./Board";
import Information from "./Information";
import { useState, useEffect } from "react";

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
        setBoardState(newBoard);

        // Update game history
        const newHistory = gameHistory.slice(0);
        newHistory.push({
            player: player,
            board: newBoard
        });
        setGameHistory(newHistory);
    }

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

    ///////////////////////////////////////
    // Game history
    const [ gameHistory, setGameHistory ] = useState([])

    // Show corresponding state
    const showStateHistory = (index) => {
        // Slice the gameHistory array to the corresponding move
        setGameHistory(gameHistory.slice(0, index + 1));
        // Set board state to gameHistory[index]
        setBoardState(gameHistory[index].board);
        // Set player to player and call nextPlayer (for the next turn)
        setPlayer(gameHistory[index].player);
        // Update player for the next turn
        nextPlayer();
    }

    // Back to game start
    const reset = () => {
        // Reset board
        setBoardState([null, null, null, null, null, null, null, null, null]);
        // Reset player
        setPlayer('X');
        // Reset history
        setGameHistory([]);
    }

    return(
        <div className="game-app">
            <Board boardState={boardState} player={player} nextPlayer={nextPlayer} updateBoard={updateBoard} />
            <Information player={player} gameHistory={gameHistory} showStateHistory={showStateHistory} reset={reset} />
        </div>
    );
}

export default App;