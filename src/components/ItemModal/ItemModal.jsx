import React from 'react';
import Button from '../button/Button';
import ItemCategory from '../ItemCategory/ItemCategory';
import Modal from '../Modal/Modal';
import './ItemModal.scss';

const ItemModal = props => {
  const {
    id,
    img,
    category,
    name,
    producer,
    description,
    priceForSixHour,
    priceForDay,
  } = props.item;

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
        <p className="itemModal__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum
          corrupti, suscipit doloremque voluptas, facere in quidem accusamus
          velit est a maxime? Itaque dolorem minima quam dolore voluptatum,
          magni praesentium?
        </p>
        <p className="itemModal__price">
          {priceForSixHour && (
            <span>{`Cena za 6 godzin: ${priceForSixHour} zł`}</span>
          )}
          <span>{`Cena za dobę: ${priceForDay} zł`}</span>
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
