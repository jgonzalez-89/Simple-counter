import React from 'react'

const Buttons = () => {

  const handleClick = () => {
    // implementation details
  };

  return (
    <div className='butContainer'>
    <button className='btn' type="button" onClick={handleClick}>
      Start
    </button>
    <button className='btn' type="button" onClick={handleClick}>
      Stop
    </button>
    <button className='btn' type="button" onClick={handleClick}>
      Clear
    </button>
  </div>
  )
}

export default Buttons