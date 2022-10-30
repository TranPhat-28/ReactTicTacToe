const Information = (props) => {

    const player = props.player;
    // History
    const gameHistory = props.gameHistory;
    // Show board history
    const showStateHistory = props.showStateHistory;
    // Reset game
    const reset = props.reset;

    return(
        <div className="information">
            <h4>Current player: {player}</h4>

            <button onClick={reset}>Go to game start</button>
            { gameHistory.map((item, index) => (
                <button onClick={() => showStateHistory(index)}>Go to move {index + 1}</button>
            )) }

        </div>
    );   
}

export default Information;