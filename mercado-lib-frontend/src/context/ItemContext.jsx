import React, { createContext, useState } from "react";
import { fetchApi } from "../helpers/fetch";

export const ItemContext = createContext();

const initialState = {
  searchList: [],
  categories: [],
  selectItem: null,
};

export const ItemProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

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
