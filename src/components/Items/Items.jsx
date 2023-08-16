import React from 'react';
import Item from '../Item/Item';
import './Items.scss';
import Container from '../container/Container';
import useFetch from '../../hooks/useFetch';
import Loader from '../Loader/Loader';

const Items = props => {
  const { data, isLoading, error } = useFetch(
    'https://wp.wypozyczalnia-kustra.pl/wp-json/acf/v3/items/?per_page=100'
  );

  isLoading ? console.log('ładowanie') : console.log(data);

  return (
    <div className="items">
      <Container className="items__container">
        {isLoading ? (
          <Loader />
        ) : (
          data.map(item => {
            return (
              <Item
                item={item}
                key={item.id}
                showModal={props.showModal}
                parentCallback={props.parentCallback}
              />
            );
          })
        )}
      </Container>
    </div>
  );
};

export default Items;
