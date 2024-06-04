import './Headers.css'

const Headers = ({score}) => {
  return (
    <div className='header'>
        <h1 id='game-title'>Rock<br></br>
        Paper<br></br>
        Scissors</h1>
        <div id='score-container'>
            <p>Score</p>
            <span id='score'>{score}</span>
        </div>
    </div>
  )
}

export default Headers