import './ResultComponent.css'

const ResultComponent = ({move, houseMove, win, handleReload}) => {

  console.log(win)
  
  return (
    <div className='result-container'>
      <div className={`${move}-bg`}>
        <img className={move} src={`icon-${move}.svg`} alt={`${move} Icon`} />
      </div>
      {win ? 
      <div className='result-span'>
        <h2>You Win</h2>
        <button onClick={() => handleReload()}>Play again</button>
      </div> : 
      <div className='result-span'>
        <h2>You Lose</h2>
        <button onClick={() => handleReload()}>Play again</button>
      </div>}
      <div className={`${houseMove}-bg`}>
        <img className={houseMove} src={`icon-${houseMove}.svg`} alt={`${houseMove} Icon`} />
      </div> 
    </div>
  )
}

export default ResultComponent