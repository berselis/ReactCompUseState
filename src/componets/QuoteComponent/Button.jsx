import React from 'react';
import arrow from '../../assets/media/arrow-right-circle-fill.svg';


const Button = ({ fontColor, eventClick }) => {
  return (
    <button onClick={eventClick} type='buttom' className='btn btn-light btn-quote'>
      <i style={{ color: fontColor }} className="bi bi-arrow-right-circle-fill"></i>
    </button>
  )
}

export default Button