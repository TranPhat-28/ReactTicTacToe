import Square from "./Square";

const Board = (props) => {

    // Get boardState
    const boardState = props.boardState;
    // Get current player
    const player = props.player;
    // Get nextPlayer function
    const nextPlayer = props.nextPlayer;
    // updateBoard function
    const updateBoard = props.updateBoard;

    

    return(
        <div className="game-board">
            { boardState.map((cell, index) => (
                <Square value={cell} index={index} player={player} nextPlayer={nextPlayer} updateBoard={updateBoard} />
            )) }
        </div>
    );
}

export default Board;