import React from 'react'
import Button from '../button/Button'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <Container className="hero__container">
        <div className="hero__content">
          <h3 className="hero__subtitle">Wypożyczalnia sprzętu ogrodniczo-budowlanego</h3>
          <h2 className="hero__title">najlepszy sprzęt w jednym miejscu</h2>
          <div className="hero__buttonsContainer">
            <Button className="button--secondary"><Link to="/kontakt">kontakt</Link></Button>
            <Button className="button--primary"><Link to="/oferta">oferta</Link></Button>
          </div>
        </div>        
      </Container>
    </div>
  )
}

export default Hero