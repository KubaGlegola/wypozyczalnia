import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.scss';
import items from '../../assets/data/items';
import Container from '../container/Container';

const Items = props => {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    if (props.filterCategory === undefined) {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(item => item.category.includes(props.filterCategory))
      );
    }
  }, [props.filterCategory]);

  return (
    <div className="items">
      <Container className="items__container">
        {filteredItems.map(item => {
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
