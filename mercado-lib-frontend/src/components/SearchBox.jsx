import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo_ML.png";
import { SearchInput } from "./SearchInput";

export const SearchBox = () => {
  return (
    <>
      <div className="header__container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <SearchInput />
      </div>
    </>
  );
};
