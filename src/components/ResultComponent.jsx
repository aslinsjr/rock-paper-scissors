import './ResultComponent.css'

import { useEffect, useState } from 'react'

const ResultComponent = ({move, houseMove, win, handleReload}) => {

  const [delay, setDelay] = useState(false)

  useEffect(() => {
    const number2 = setTimeout(() => {
      setDelay(true)
    }, 1000)
  }, [])
  
  return (
    <div className='result-container'>
      <div className={`${move}-bg`} id='user-move'>
        <img className={move} src={`icon-${move}.svg`} alt={`${move} Icon`} />
      </div>
      {delay && <div>
        {win ? 
      <div className='result-span'>
        <h2>You Win</h2>
        <button onClick={() => handleReload()}>Play again</button>
      </div> : 
      <div className='result-span'>
        <h2>Try again</h2>
        <button onClick={() => handleReload()}>Play</button>
      </div>}</div>
       }
      <div className={`${houseMove}-bg`} id='house-move'>
        <img className={houseMove} src={`icon-${houseMove}.svg`} alt={`${houseMove} Icon`} />
      </div>
    </div>
  )
}

export default ResultComponent