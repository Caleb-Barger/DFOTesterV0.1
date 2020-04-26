import React from 'react'

const Main = props => {
    const {player} = props
    return (
        <div>
            <h1>{player.name} The Hobo</h1>
            <img 
                src={player.imgSrc}
                alt={player.name}
            />
        </div>
    )
}

export default Main