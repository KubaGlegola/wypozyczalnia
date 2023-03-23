import React from 'react';
import Item from '../Item/Item';
import './Items.scss';
import items from '../../assets/data/items';
import Container from '../container/Container';

const Items = props => {
  return (
    <Container className="items">
      {items.map(item => {
        // return <Item key={item.id} id={item.id} image={item.img} categories={item.category} name={item.name} producer={item.producer} description={item.description} />
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
  );
};

export default Items;
