import React from 'react'
import Button from '../button/Button';
import './Item.scss'

const Item = (props) => {
  return (
    <div className="item">
        <div className="item__imageContainer">
            <img src='/images/items/motopompa.png' className="item__image" />
        </div>
        <div className="item__content">
            <span className="item__category">ogród</span>
            <h3 className="item__name">motopompa</h3>
            <p className="item__producer">cedrus</p>
            <p className="item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum corrupti, suscipit doloremque voluptas, facere in quidem accusamus velit est a maxime? Itaque dolorem minima quam dolore voluptatum, magni praesentium?</p>
            <Button className="item__button button--primary">Pokaż szczegóły</Button>
        </div>
    </div>
  )
}

export default Item