import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Icon from "../assets/icons/ic_Search.png";

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const inputSearchChange = ({ target }) => {
    setSearch(target.value);
  };

  const showItem = (e) => {
    if (e.key === "Enter") {
      history.push(`/items?search=${search}`);
    }
  };

  return (
    <div className="input__container">
      <input
        value={search}
        name="search"
        onChange={(e) => inputSearchChange(e)}
        type="text"
        className="input__search"
        placeholder="Nunca dejes de buscar"
        onKeyPress={(e) => showItem(e)}
      />
      <Link to={`/items?search=${search}`}>
        <div className="input__icon__container">
          <img src={Icon} alt="search_icon" />
        </div>
      </Link>
    </div>
  );
};
