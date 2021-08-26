import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ItemContainer } from "../components/ItemContainer";
import { ResultsContainer } from "../components/ResultsContainer";
import { SearchBox } from "../components/SearchBox";
import { Home } from "../pages/Home";

//rutas de nuestra aplicacion { /items : busqueda por query params }, { /items/id busqueda por param }, { / inicio de nuestra app }
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <SearchBox />
        <Switch>
          <Route exact path="/items" component={ResultsContainer} />
          <Route exact path="/items/:id" component={ItemContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
