import { useState, useEffect } from 'react'

import Headers from './components/Headers'
import SelectComponent from './components/SelectComponent'
import HelpGuide from './components/HelpGuide'
import ResultComponent from './components/ResultComponent'

import './App.css'

function App() {

  const [score, setScore] = useState(0)
  const [rules, setRules] = useState(false)
  const [selected, setSelected] = useState(false)
  const [move, setMove] = useState("")
  const [houseMove, setHouseMove] = useState("")
  const [win, setWin] = useState(false)

  function getRandomMove() {

    const array = ["paper", "rock", "scissors"]

    setHouseMove(array[(Math.floor(Math.random() * 3))])
  }

  function handleClose() {
    setRules(false)
  }

  function handleSelect(e) {

    setWin(false)

    setSelected(true)

    if(e.target.className === "paper") {
      setMove("paper")
    }

    if(e.target.className === "scissors") {
      setMove("scissors")
    }

    if(e.target.className === "rock") {
      setMove("rock")
    }

    getRandomMove()
  }

  function handleReload() {
    setSelected(false)
  }

  useEffect(() => {
    if(move === "paper" && houseMove === "rock") {
      setWin(true)
      setScore(score + 1)
    }
    
    if(move === "rock" && houseMove === "scissors") {
      setWin(true)
      setScore(score + 1)
    }
    
    if(move === "scissors" && houseMove === "paper") {
      setWin(true)
      setScore(score + 1)
    }
  }, [move])

  


  return (
    <div className='game-container'>
      {rules ? <div id='rules-bg'><HelpGuide handleClose={handleClose}/></div> : <></>}
      <Headers score={score} />
      {selected ? <ResultComponent move={move} houseMove={houseMove} win={win} handleReload={handleReload} /> : <SelectComponent handleSelect={handleSelect}/>}
      <div id='rules-btn'>
        <button  onClick={() => setRules(true)}>Rules</button>
      </div>
    </div>
  )
}

export default App
