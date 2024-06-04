import './HelpGuide.css'

const HelpGuide = ({handleClose}) => {
  return (
    <div className='rules'>
      <div className="rules-header">
        <h2>Rules</h2>
        <button onClick={() => handleClose()}><img src="./icon-close.svg" alt="Close Icon" /></button>
      </div>
        <img src="./image-rules.svg" alt="Rules Image" />
    </div>
  )
}

export default HelpGuide