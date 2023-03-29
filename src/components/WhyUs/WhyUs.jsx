import React from 'react';
import Container from '../container/Container';
import { BsTruck, BsShieldCheck } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import './WhyUs.scss';

const WhyUs = () => {
  return (
    <section
      className="whyUs"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
    >
      <h1 className="whyUs__title">Co nas wyróżnia?</h1>
      <Container className="whyUs__container">
        <div className="whyUs__item">
          <div className="whyUs__itemIconContainer">
            <BsShieldCheck className="whyUs__itemIcon" />
          </div>
          <h2 className="whyUs__itemTitle">niezawodny sprzęt</h2>
          <p className="whyUs__itemContent">
            W naszej ofercie posiadamy sprzęt najlepszych firm na rynku, który
            jest regularnie serwisowany dzięki czemu nie zawiedzie Cię podczas
            pracy.
          </p>
        </div>
        <div className="whyUs__item">
          <div className="whyUs__itemIconContainer">
            <FaRegHandshake className="whyUs__itemIcon" />
          </div>
          <h2 className="whyUs__itemTitle">wsparcie</h2>
          <p className="whyUs__itemContent">
            Jesteśmy do Państwa dyspozycji w zakresie doradztwa technicznego jak
            i obsługi maszyn. Jeżeli masz jakieś wątpliwości skontakuj się z
            nami!
          </p>
        </div>
        <div className="whyUs__item">
          <div className="whyUs__itemIconContainer">
            <BsTruck className="whyUs__itemIcon" />
          </div>
          <h2 className="whyUs__itemTitle">transport</h2>
          <p className="whyUs__itemContent">
            Nie masz jak przetransportować wypożyczonego sprzętu? Bez obaw! W
            naszej ofercie znajduje się także usługa transportu.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
