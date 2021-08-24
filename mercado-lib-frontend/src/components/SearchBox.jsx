import React from "react";
import Logo from "../assets/images/Logo_ML.png";
import { SearchInput } from "./SearchInput";

export const SearchBox = () => {
  return (
    <>
      <div className="header__container">
        <img src={Logo} />
        <SearchInput />
      </div>
    </>
  );
};
