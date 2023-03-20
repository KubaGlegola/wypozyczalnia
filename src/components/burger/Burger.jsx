import React from 'react'
import './Burger.scss';

const Burger = (props) => {
  return (
    <div className={`burger ${props.className}`}>
        <input type='checkbox' id='burgerToggle' name='checkbox'/>
        <label htmlFor="burgerToggle" className="lines">
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
        </label>        
    </div>
  )
}

export default Burger