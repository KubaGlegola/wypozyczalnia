import React from 'react';
import Container from '../../components/container/Container';
import './ContactPage.scss';
import { GoLocation, GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <Container className="contactPage__container">
      <div className="contactPage">
        <h1 className="contactPage__title">
          <span>Masz pytanie lub potrzebujesz pomocy?</span>
          <span>Zapraszamy do kontaktu!</span>
        </h1>
        <div className="contactPage__dataContainer">
          <div className="contactPage__addressContainer">
            <span className="iconContainer">
              <GoLocation className="icon" />
            </span>
            <div className="contactPage__address">
              <span>Janów 5D</span>
              <span>24-100 Puławy</span>
            </div>
          </div>
          <a href="tel:690-182-219" className="contactPage__link">
            <span className="iconContainer">
              <BsTelephone className="icon" />
            </span>
            690 182 219
          </a>
          <a href="mailto:wynajemkustra@wp.pl" className="contactPage__link">
            <span className="iconContainer">
              <GoMail className="icon" />
            </span>
            wynajemkustra@wp.pl
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100088261512715"
            target="_blank"
            className="contactPage__link"
          >
            <span className="iconContainer">
              <FiFacebook className="icon" />
            </span>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/wypozyczalniakustra"
            target="_blank"
            className="contactPage__link"
          >
            <span className="iconContainer">
              <FiInstagram className="icon" />
            </span>
            Instagram
          </a>
        </div>
        <div className="contactPage__mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6839.564487480278!2d21.85149568899174!3d51.40289967390895!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDI0JzEwLjUiTiAyMcKwNTEnMDUuMiJF!5e0!3m2!1spl!2sus!4v1679654736789!5m2!1spl!2sus"
            allowFullScreen=""
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contactPage__map"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
