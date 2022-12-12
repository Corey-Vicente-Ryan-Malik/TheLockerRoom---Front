import React from 'react';

export default function GameSched(props) {
    
    const displayGames = (props) => {
        const {games} = props;
        // console.log(games)

        if(games.length > 0) {
            return (
                games.map((game, index) => {
                    console.log(game);
                    return (
                        <div className='game' key={game._id}>
                            <h1></h1>
                        </div>
                    )
                })
            )
        } else {
            return (<h1>Loading...</h1>)
        }
    }
    return (
        <>
            {displayGames(props)}
        </>
    )

}