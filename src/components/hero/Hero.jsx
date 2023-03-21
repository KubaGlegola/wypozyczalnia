import React from 'react'
import Container from '../container/Container'
import './Hero.scss'

const Hero = () => {
  return (
    <div className="hero">
      <Container className="hero__container">
        <div className="hero__content">
          <h3 className="hero__subtitle">Wypożyczalnia sprzętu ogrodniczo-budowlanego</h3>
          <h2 className="hero__title">najlepszy sprzęt w jednym miejscu</h2>
          <div className="hero__buttonsContainer">
            <button>kontakt</button>
            <button>oferta</button>
          </div>
        </div>        
      </Container>
    </div>
  )
}

export default Hero