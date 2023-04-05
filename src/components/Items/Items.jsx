import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.scss';
import Container from '../container/Container';
import { useLoaderData } from 'react-router-dom';

const Items = props => {
  const items = useLoaderData();
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (props.filterCategory === undefined) {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(item => item.acf.category.includes(props.filterCategory))
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
