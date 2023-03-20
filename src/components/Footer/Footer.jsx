import React from 'react'
import './Footer.scss'
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__about">
            <h2 className="footer__about-title">Wypożyczalnia sprzętu ogrodniczo-budowlanego Łukasz Kustra</h2>
            <p className="footer__about-address">
                <span>Janów 5D</span>
                <span>24-100 Puławy</span>
                <span><GoLocation className="icon"/><a href='https://goo.gl/maps/iv95LGKHGoMWhhF9A' target="_blank">51°24'10.5"N 21°51'05.2"E</a></span>
            </p>
        </div>
        <div className="footer__contact">
            <span><BsTelephone className="icon"/><a href="tel:690-182-219">690 182 219</a></span>
        </div>
        <div className="footer_informations">

        </div>
    </footer>
  )
}

export default Footer