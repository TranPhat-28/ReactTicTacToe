const Information = (props) => {

    const player = props.player;

    return(
        <div className="information">
            <h4>Current player: {player}</h4>

            <button>Go to move</button>
            <button>Go to move</button> 
            <button>Go to move</button> 

            <button>Go to move</button>
            <button>Go to move</button> 
            <button>Go to move</button> 

            <button>Go to move</button>
            <button>Go to move</button> 
            <button>Go to move</button> 
        </div>
    );   
}

export default Information;