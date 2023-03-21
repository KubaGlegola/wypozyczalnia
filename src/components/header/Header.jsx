import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive'
import { Squash as Hamburger } from 'hamburger-react';
import './Header.scss'
import logo from '/src/assets/logo.png';


const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header">
        <img src={logo} className='header__logo' />
        {!isDesktop &&<Hamburger toggled={isOpen} toggle={setOpen} />}
        <ul className={`header__menu ${isOpen ? "header__menu--visible" : ""}`}>
            <li>Strona główna</li>
            <li>Oferta</li>
            <li>Kontakt</li>
            <li>FAQ</li>
        </ul>
    </div>
  )
}

export default Header