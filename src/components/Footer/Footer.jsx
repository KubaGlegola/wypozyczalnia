import React from 'react';
import './Footer.scss';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import Container from '../container/Container';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer className={props.className}>
      <Container className="footer">
        <div className="footer__about">
          <h2 className="footer__title">
            Wypożyczalnia sprzętu ogrodniczo-budowlanego Łukasz Kustra
          </h2>
          <p className="footer__about-address">
            <span>Janów 5D</span>
            <span>24-100 Puławy</span>
            <a href="https://goo.gl/maps/iv95LGKHGoMWhhF9A" target="_blank">
              <span className="iconContainer">
                <GoLocation className="icon" />
              </span>
              51°24'10.5"N 21°51'05.2"E
            </a>
          </p>
        </div>
        <div className="footer__contact">
          <h2 className="footer__title">skontaktuj się z nami!</h2>
          <a href="tel:690-182-219">
            <span className="iconContainer">
              <BsTelephone className="icon" />
            </span>
            690 182 219
          </a>
          <a href="mailto:wynajemkustra@wp.pl">
            <span className="iconContainer">
              <GoMail className="icon" />
            </span>
            wynajemkustra@wp.pl
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100088261512715"
            target="_blank"
          >
            <span className="iconContainer">
              <FiFacebook className="icon" />
            </span>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/wypozyczalniakustra"
            target="_blank"
          >
            <span className="iconContainer">
              <FiInstagram className="icon" />
            </span>
            Instagram
          </a>
        </div>
        <div className="footer__menu">
          <h2 className="footer__title">Menu</h2>
          <Link to="/">Strona główna</Link>
          <Link to="/oferta">Oferta</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/regulamin">Regulamin</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div className="footer__info">
          <h2 className="footer__title">Informacje</h2>
          <a href="#">Najczęściej zadawane pytania</a>
          <a href="#">Regulamin</a>
          <a href="#">Warunki umowy najmu</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
