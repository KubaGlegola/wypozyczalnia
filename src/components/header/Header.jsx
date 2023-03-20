import React from 'react'
import Burger from '../burger/Burger';
import './Header.scss'
import logo from '/src/assets/logo.png';

const Header = () => {
  return (
    <div className="header">
        <img src={logo} className='header__logo' />
        <div className='header__menuContainer'>
            <Burger className='header__burger'/>            
        </div>
        <ul className="header__menu">
            <li>Strona główna</li>
            <li>Oferta</li>
            <li>Kontakt</li>
            <li>FAQ</li>
        </ul>
    </div>
  )
}

export default Header