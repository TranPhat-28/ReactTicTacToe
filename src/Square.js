import { useState } from "react";

const Square = (props) => {


    // Value
    const value = props.value;
    // Index
    const index = props.index;
    // Get current player
    const player = props.player;
    // Handle next player
    const nextPlayer = props.nextPlayer;
    // updateBoard function
    const updateBoard = props.updateBoard;



    // Handle cell clicked
    const handleClick = (value, player, index, e) => {
        // Do not update if cell has already had a value
        if (value === null){
            updateBoard(player, index);
            nextPlayer();
        }
    }

    return(
        <div className='board-cell' onClick={(e) => handleClick(value, player, index, e)} >
            {value}
        </div>
    );
}

export default Square;