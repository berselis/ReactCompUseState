import React from 'react';

const Button = ({ fontColor, eventClick }) => {
  return (
    <button onClick={eventClick} type='buttom' className='btn btn-light btn-quote'>
      <i style={{ color: fontColor }} className="bi bi-arrow-right-circle-fill"></i>
    </button>
  )
}

export default Button