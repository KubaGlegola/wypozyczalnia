import React from 'react';
import Button from '../button/Button';
import ItemCategory from '../ItemCategory/ItemCategory';
import './Item.scss';

const Item = props => {
  const { item: modalItem } = props;
  const { id, img, category, name, producer, description } = modalItem;

  const sendData = () => {
    props.parentCallback(modalItem);
    props.showModal();
  };

  return (
    <div
      className="item"
      data-aos="flip-right"
      data-aos-duration="1500"
      data-aos-offset="-100"
    >
      <div className="item__imageContainer">
        <img src={img} className="item__image" loading="lazy" />
      </div>
      <div className="item__content">
        <div className="item__categories">
          <ItemCategory categories={category} />
        </div>
        <h3 className="item__name">{name}</h3>
        {producer && <p className="item__producer">{producer}</p>}
        <p className="item__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum
          corrupti, suscipit doloremque voluptas, facere in quidem accusamus
          velit est a maxime? Itaque dolorem minima quam dolore voluptatum,
          magni praesentium?
        </p>
      </div>
      <Button className="item__button button--primary" onClick={sendData}>
        Pokaż szczegóły
      </Button>
    </div>
  );
};

export default Item;
