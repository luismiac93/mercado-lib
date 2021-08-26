import React from "react";
import { ItemProvider } from "./context/ItemContext";
import { AppRouter } from "./routes/AppRouter";

export const MercadoLibApp = () => {
  return (
    <ItemProvider>
      <AppRouter />
    </ItemProvider>
  );
};
