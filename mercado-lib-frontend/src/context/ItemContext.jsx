import React, { createContext, useState } from "react";
import { fetchApi } from "../helpers/fetch";

export const ItemContext = createContext();

//estado inicial para la aplicación
const initialState = {
  searchList: [],
  categories: [],
  selectItem: null,
};

//proveedor de estado de la aplicaion
export const ItemProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  //buscar por el query 
  const findByQuery = async (query) => {
    try {
      const items = await fetchApi(`/items?q=${query}`);
      if (items.ok) {
        setAppState({
          ...appState,
          searchList: items.data.items,
          categories: items.data.categories,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //buscar por el id
  const findById = async (id) => {
    setIsLoading(true);
    if (!id) {
      return;
    }

    try {
      const item = await fetchApi(`/items/${id}/description`);
      if (item.ok) {
        setAppState({
          ...appState,
          selectItem: item.data.item,
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        appState,
        findByQuery,
        findById,
        isLoading,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
