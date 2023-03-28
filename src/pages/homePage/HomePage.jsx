import React from 'react';
import Container from '../../components/container/Container';
import Hero from '../../components/hero/Hero';
import Modal from '../../components/Modal/Modal';
import Offer from '../../components/Offer/Offer';
import Producers from '../../components/producers/Producers';
import WhyUs from '../../components/WhyUs/WhyUs';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <Offer />
      <Producers />
    </>
  );
};

export default HomePage;
