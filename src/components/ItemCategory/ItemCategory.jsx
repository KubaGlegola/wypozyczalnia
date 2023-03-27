import React from 'react';
import './ItemCategory.scss';

const ItemCategory = props => {
  const { categories } = props;
  return categories.map(category => {
    return (
      <span
        key={category}
        className={`category ${
          category === 'ogród'
            ? 'category--garden'
            : category === 'dom'
            ? 'category--house'
            : category === 'budowa'
            ? 'category--construction'
            : category === 'narzędzia'
            ? 'category--tools'
            : category === 'wszystko'
            ? 'category--all'
            : ''
        }`}
      >
        {category}
      </span>
    );
  });
};

export default ItemCategory;
