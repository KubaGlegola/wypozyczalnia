import React from 'react';
import Container from '../container/Container';
import './Offer.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Offer = () => {
  return (
    <section className="offer" data-aos="fade-right" data-aos-duration="1500">
      <h1 className="offer__title">Zapraszamy do zapoznania się z ofertą</h1>
      <p className="offer__description">
        Możesz wyświetlić interesującą Cię kategorię lub przejść do pełnej
        oferty
      </p>
      <Container className="offer__container">
        <div className="offer__category offer__category--garden">
          <Link to="/oferta/ogród">
            <Button className="button--primary">Ogród</Button>
          </Link>
        </div>
        <div className="offer__category offer__category--construction">
          <Link to="/oferta/budowa">
            <Button className="button--primary">Budowa</Button>
          </Link>
        </div>
        <div className="offer__category offer__category--house">
          <Link to="/oferta/dom">
            <Button className="button--primary">Dom</Button>
          </Link>
        </div>
        <div className="offer__category offer__category--tools">
          <Link to="/oferta/narzędzia">
            <Button className="button--primary">Narzędzia</Button>
          </Link>
        </div>
        <Link to="/oferta" className="offer__button">
          <Button className="button--primary">Pokaż pełną ofertę</Button>
        </Link>
      </Container>
    </section>
  );
};

export default Offer;
