import React from "react";

export const Breadcrumb = ({items}) => {
  return (
    <div className="breadcrumb__container">
      <div  className="breadcrumb__content">
        <p className="breadcrumb">{items.join(" > ")}</p>
      </div>
    </div>
  );
};
