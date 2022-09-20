import React from 'react';
import cardStyles from './Card.module.scss';


function Card({imgUrl, title, price, onPlus, onFavorite }){

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPlus = () => {
    onPlus({imgUrl, title, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({title,imgUrl, price})
    setIsFavorite(!isFavorite);
  }

    return(
      <div className={cardStyles.card}>
        <div className={cardStyles.favorite} onClick={onClickFavorite}>
          <img  width={20} height={20} src={isFavorite ?  "/img/heart-solid.svg" : "/img/heart-regular.svg"}  alt=""></img>
        </div>
        <img width={133} height={112} src={imgUrl} alt=""></img>
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img className={cardStyles.plus} onClick={onClickPlus} width={20} height={20} src={isAdded ? "/img/check.svg" : "/img/plus.svg"} alt=""></img>
        </div>
      </div>
    )
}

export default Card;