import React, { useState } from 'react';
import Button from '../button/Button';
import ItemCategory from '../ItemCategory/ItemCategory';
import Modal from '../Modal/Modal';
import './ItemModal.scss';

const ItemModal = props => {
  const [radioValue, setRadioValue] = useState('description');

  const {
    img,
    category,
    name,
    producer,
    description,
    technicalData,
    priceForSixHour,
    priceForDay,
    deposit,
  } = props.item;

  const radioValueChange = e => {
    setRadioValue(e.target.id);
  };

  return (
    <Modal hideModal={props.hideModal} className="itemModal">
      <div className="itemModal__imageContainer">
        <img src={img} className="itemModal__image" />
      </div>
      <div className="itemModal__content">
        <div className="itemModal__categories">
          <ItemCategory categories={category} />
        </div>
        <h3 className="itemModal__name">{name}</h3>
        <p className="itemModal__producer">{producer}</p>
        <div className="itemModal__details">
          <form
            className="itemModal__radioContainer"
            onChange={radioValueChange}
          >
            <input
              type="radio"
              name="detailPick"
              id="description"
              defaultChecked
            />
            <label htmlFor="description">Opis</label>
            <input type="radio" name="detailPick" id="technicalData" />
            <label htmlFor="technicalData">Dane techniczne</label>
          </form>

          {radioValue === 'description' ? (
            <p className="itemModal__description"> {description} </p>
          ) : (
            <p className="itemModal__technicalData"> {technicalData}</p>
          )}
        </div>
        <p className="itemModal__price">
          {priceForSixHour && (
            <span>
              <b>{`Cena za 6 godzin:`}</b> {`${priceForSixHour} zł`}
            </span>
          )}
          {priceForDay && (
            <span>
              <b>{`Cena za dobę:`}</b> {`${priceForDay} zł`}
            </span>
          )}
          {deposit && (
            <span>
              <b>{`Kaucja:`}</b> {`${deposit} zł`}
            </span>
          )}
        </p>
        <Button
          className="button--secondary itemModal__button"
          onClick={props.hideModal}
        >
          Zamknij
        </Button>
      </div>
    </Modal>
  );
};

export default ItemModal;
