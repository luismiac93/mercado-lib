import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import { Item } from "./Item";

export const ItemContainer = () => {
  const { id } = useParams();
  const { findById, appState, isLoading } = useContext(ItemContext);

  useEffect(() => {
    findById(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="item__container">
        <div className="item__detail">
          <div className="not-content">
            <p>Espera por favor...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="item__container">
      <div className="item__detail">
        {appState.selectItem ? (
          <Item {...appState.selectItem} />
        ) : (
          <div className="not-content">
            <p>No hemos encontrado tu búsqueda, pero nunca dejes de buscar</p>
          </div>
        )}
      </div>
    </div>
  );
};
