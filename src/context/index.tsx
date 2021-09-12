import React from "react";

import { GameContextProvider } from "./GameContext/context";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <GameContextProvider>{children}</GameContextProvider>
    </>
  );
};

export default GlobalContext;