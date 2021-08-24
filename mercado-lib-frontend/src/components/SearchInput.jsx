import React from "react";
import Icon from "../assets/icons/ic_Search.png";

export const SearchInput = () => {
  return (
    <div className="input__container">
      <input type="text" className="input__search" placeholder="Nunca dejes de buscar" />
      <div className="input__icon__container">
        <img src={Icon} />
      </div>
    </div>
  );
};
