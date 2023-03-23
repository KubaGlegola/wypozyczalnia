import React from 'react';
import Container from '../../components/container/Container';
import Hero from '../../components/hero/Hero';
import Modal from '../../components/Modal/Modal';
import Producers from '../../components/producers/Producers';
import './HomePage.scss';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Producers />
    </>
  );
};

export default HomePage;
