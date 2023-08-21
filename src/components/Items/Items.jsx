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

  return (
    <div className="items">
      <Container className="items__container">
        {isLoading ? (
          <Loader />
        ) : (
          (props.filterCategory
            ? data.filter(item =>
                item.acf.category.includes(props.filterCategory)
              )
            : data
          ).map(item => {
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
