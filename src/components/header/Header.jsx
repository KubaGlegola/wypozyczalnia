import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Squash as Hamburger } from 'hamburger-react';
import './Header.scss';
import logo from '/src/assets/logo.png';
import Menu from '../Menu/Menu';

const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const [isOpen, setOpen] = useState(false);

  const closeMenuHandler = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <img src={logo} className="header__logo" />
      {!isDesktop && <Hamburger toggled={isOpen} toggle={setOpen} />}
      <Menu isOpen={isOpen} closeMenu={closeMenuHandler} />
    </div>
  );
};

export default Header;
