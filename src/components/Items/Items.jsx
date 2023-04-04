import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.scss';
import items from '../../assets/data/items';
import Container from '../container/Container';

const Items = props => {
  const [filteredItems, setFilteredItems] = useState([]);

  const getApiData = async () => {
    const response = await fetch(
      'https://wp.jglegola.pl/wp-json/wp/v2/items'
    ).then(response => response.json());
    console.log(response);
    setFilteredItems(response);
  };

  useEffect(() => {
    // if (props.filterCategory === undefined) {
    //   setFilteredItems(items);
    // } else {
    //   setFilteredItems(
    //     items.filter(item => item.category.includes(props.filterCategory))
    //   );
    // }
    getApiData();
  }, []);

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
