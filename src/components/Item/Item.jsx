import React from 'react'
import Button from '../button/Button';
import './Item.scss'

const Item = (props) => {
    const {id, image, categories, name, producer, description} = props;

  return (
    <div className="item">
        <div className="item__imageContainer">
            <img src={image} className="item__image" />
        </div>
        <div className="item__content">
            <div className="item__categories">
                {categories.map(category=>{
                    return <span className={`item__category ${
                        category === "ogród" ? "item__category--garden" : 
                        category === "dom" ? "item__category--house" : 
                        category === "budowa" ? "item__category--construction" : 
                        category === "narzędzia" ? "item__category--tools" :
                        ""}`}>{category}</span>
                })}
            </div>            
            <h3 className="item__name">{name}</h3>
            <p className="item__producer">{producer}</p>
            <p className="item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro harum corrupti, suscipit doloremque voluptas, facere in quidem accusamus velit est a maxime? Itaque dolorem minima quam dolore voluptatum, magni praesentium?</p>
            <Button className="item__button button--primary">Pokaż szczegóły</Button>
        </div>
    </div>
  )
}

export default Item