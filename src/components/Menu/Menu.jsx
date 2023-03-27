import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = props => {
  const { isOpen, closeMenu } = props;

  return (
    <nav className={`menu ${isOpen ? 'menu--visible' : ''}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'menu__link menu__link--active' : 'menu__link'
        }
        onClick={closeMenu}
      >
        Strona Główna
      </NavLink>
      <NavLink
        to="/oferta"
        className={({ isActive }) =>
          isActive ? 'menu__link menu__link--active' : 'menu__link'
        }
        onClick={closeMenu}
      >
        Oferta
      </NavLink>
      <NavLink
        to="/kontakt"
        className={({ isActive }) =>
          isActive ? 'menu__link menu__link--active' : 'menu__link'
        }
        onClick={closeMenu}
      >
        Kontakt
      </NavLink>
      <NavLink
        to="/faq"
        className={({ isActive }) =>
          isActive ? 'menu__link menu__link--active' : 'menu__link'
        }
        onClick={closeMenu}
      >
        FAQ
      </NavLink>
    </nav>
  );
};

export default Menu;
