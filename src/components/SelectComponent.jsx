import './SelectComponent.css'

const SelectComponent = ({handleSelect}) => {
  return (
    <div className='select-container'>
        <img id='triangle' src="./bg-triangle.svg" alt="Triangle Background" />
        <div className="paper-bg">
          <button className='paper' onClick={(e) => handleSelect(e)}><img className='paper' src="icon-paper.svg" alt="Paper Icon" /></button>
        </div>
        <div className="scissors-bg">
          <button className='scissors' onClick={(e) => handleSelect(e)}><img className='scissors' src="icon-scissors.svg" alt="scissors Icon" /></button>
        </div>
        <div className="rock-bg">
          <button className='rock' onClick={(e) => handleSelect(e)}><img className='rock' src="icon-rock.svg" alt="rock Icon" /></button>
        </div>
    </div>
  )
}

export default SelectComponent