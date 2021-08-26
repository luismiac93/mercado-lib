import React, { useContext, useEffect } from "react";
import { ItemContext } from "../context/ItemContext";
import { useQuery } from "../hooks/useQuery";
import { Breadcrumb } from "./Breadcrumb";
import { Result } from "./Result";

export const ResultsContainer = () => {
  const query = useQuery();
  const search = query.get("search");
  const { findByQuery, appState } = useContext(ItemContext);

  useEffect(() => {
    if (search) {
      findByQuery(search);
    }
  }, [search]);
  return (
    <div>
      <Breadcrumb items={appState.categories} />
      <div className="results__container">
        <div className="results__items">
          {appState.searchList.map((result) => (
            <Result key={result.id} {...result} />
          ))}
        </div>
      </div>
    </div>
  );
};
