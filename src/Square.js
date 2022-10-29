import { useState } from "react";

const Square = (props) => {

    // Use state for removing class when a cell has had a value
    const [isActive, setActive] = useState(true);


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
            console.log(e);
            setActive(!isActive);
        }
    }

    return(
        <div className={isActive ? "cell-hover board-cell": "cell-disabled board-cell"} onClick={(e) => handleClick(value, player, index, e)} >
            {value}
        </div>
    );
}

export default Square;