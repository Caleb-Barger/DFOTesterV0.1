import React from 'react'

const PlayerSetup = props => {
    const {onChangeHandler, formValues, setPlayerName} = props

    return (
        <div>
            <label>
                Name: <input 
                    type="text"
                    name='name'
                    value={formValues.name}
                    onChange={onChangeHandler}
                />
            </label>
            <button onClick={setPlayerName}>Set Player Name</button>
        </div>
    )
}

export default PlayerSetup