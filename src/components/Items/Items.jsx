import React from 'react'
import Item from '../Item/Item'
import './Items.scss'
import items from '../../assets/data/items';

const Items = () => {
  return (
    <div className="items">
        {items.map((item) => {
            return <Item key={item.id} id={item.id} image={item.img} categories={item.category} name={item.name} producer={item.producer} description={item.description} /> 
        })}
    </div>
  )
}

export default Items