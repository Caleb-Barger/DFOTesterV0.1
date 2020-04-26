import React, { useEffect, useState } from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import './App.css';
import PlayerSetup from './components/PlayerSetup'
import Main from './components/Main'

const initalPlayerState = {
  name: '',
  attackDmg: 10,
  blockAmt: 5,
  imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71FkwyYVP5L._AC_SX425_.jpg',
  health: 100,
  currentBlock: 0,
}

const initalFormValues = {
  name: ''
}

function App() {
  const [player, setPlayer] = useState(initalPlayerState)
  const [formValues, setFormValues] = useState(initalFormValues)
  const history = useHistory()

  useEffect(() => {
    history.push('/setup')
  }, [])

  const onChangeHandler = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const setPlayerName = evt => {
    evt.preventDefault()
    setPlayer({
      ...player,
      name: formValues.name
    })
    history.push('/main')
  }


  return (
    <Switch>
      <Route path='/setup'>
        <PlayerSetup setPlayerName={setPlayerName} onChangeHandler={onChangeHandler} formValues={formValues}/>
      </Route>
      <Route path='/main'>
        <Main player={player}/>
      </Route>
    </Switch>
  )
}

export default App;
