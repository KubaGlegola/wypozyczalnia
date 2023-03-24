import React from 'react';
import Item from '../Item/Item';
import './Items.scss';
import items from '../../assets/data/items';
import Container from '../container/Container';

const Items = props => {
  return (
    <div className="items">
      <Container className="items__container">
        {items.map(item => {
          return (
            <Item
              item={item}
              key={item.id}
              showModal={props.showModal}
              parentCallback={props.parentCallback}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Items;
