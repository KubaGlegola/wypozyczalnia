import React, { useState } from 'react';
import Items from '../../components/Items/Items';
import ItemModal from '../../components/ItemModal/ItemModal';
import { NavLink, useParams } from 'react-router-dom';
import Container from '../../components/container/Container';
import './OfferPage.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const OfferPage = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [modalItem, setModalItem] = useState();
  let { category } = useParams();

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const callbackFunction = childData => {
    setModalItem(childData);
  };

  return (
    <>
      <SectionTitle title="oferta" />
      {modalIsShown && (
        <ItemModal hideModal={hideModalHandler} item={modalItem} />
      )}
      <Container
        className="offerPage__container"
        data-aos="slide-left"
        data-aos-duration="2000"
      >
        <p className="offerPage__filter">Filtruj:</p>
        <NavLink
          to="/oferta"
          className={({ isActive }) =>
            isActive
              ? 'category category--all category--active'
              : 'category category--all'
          }
          end
        >
          Wszystko
        </NavLink>
        <NavLink
          to="/oferta/dom"
          className={({ isActive }) =>
            isActive
              ? 'category category--house category--active'
              : 'category category--house'
          }
        >
          Dom
        </NavLink>
        <NavLink
          to="/oferta/ogród"
          className={({ isActive }) =>
            isActive
              ? 'category category--garden category--active'
              : 'category category--garden'
          }
        >
          ogród
        </NavLink>
        <NavLink
          to="/oferta/budowa"
          className={({ isActive }) =>
            isActive
              ? 'category category--construction category--active'
              : 'category category--construction'
          }
        >
          Budowa
        </NavLink>
        <NavLink
          to="/oferta/narzędzia"
          className={({ isActive }) =>
            isActive
              ? 'category category--tools category--active'
              : 'category category--tools'
          }
        >
          Narzędzia
        </NavLink>
      </Container>
      <Items
        showModal={showModalHandler}
        parentCallback={callbackFunction}
        filterCategory={category}
      />
    </>
  );
};

export default OfferPage;
