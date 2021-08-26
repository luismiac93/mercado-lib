import React from "react";

export const Item = ({
  picture,
  id,
  condition,
  sold_quantity,
  title,
  price,
  description,
}) => {
  return (
    <div className="item__general">
      <div className="item__content">
        <div className="item__img">
          <img src={picture} alt={id} />
        </div>
        <div>
          <p className="item__condition">
            {condition} - {sold_quantity} vendidos
          </p>
          <h4 className="item__title">{title}</h4>
          <p className="item__price">{`$ ${price.amount.toLocaleString()}`}</p>
          <button className="item__buttton">Comprar</button>
        </div>
      </div>
      <div className="item__description__container">
        <h4 className="item__description__title">Descripción del producto</h4>
        <p className="item__description">{description}</p>
      </div>
    </div>
  );
};
