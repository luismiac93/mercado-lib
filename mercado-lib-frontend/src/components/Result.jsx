import React from "react";
import { useHistory } from "react-router-dom";
import Icon from "../assets/icons/ic_shipping.png";

export const Result = ({ id, picture, title, price, city, free_shipping }) => {
  const history = useHistory();
  const showItem = () => {
    history.push(`/items/${id}`);
  };
  return (
    <div className="result__item" onClick={showItem}>
      <div className="result__content">
        <div className="result__img__container">
          <img
            className="result__img"
            src={picture}
            alt={title}
            width={180}
            height={180}
          />
        </div>
        <div className="content__info">
          <div className="content__info__price">
            <div className="content__price">
              <h4>{`$ ${price.amount.toLocaleString()} `}</h4>
              {free_shipping && (
                <div className="price__icon">
                  <img src={Icon} alt="free_shipping" />
                </div>
              )}
            </div>
            <p className="content__title">{title}</p>
          </div>
          <div className="content__city">
            <p>{city}</p>
          </div>
        </div>
      </div>
      <div className="result__separator"></div>
    </div>
  );
};
