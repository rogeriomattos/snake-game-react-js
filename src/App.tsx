import React from 'react';
import GlobalContext from "./context/index";
import Game from './components/templates/Game';

function App() {
  return (
    <GlobalContext>
      <Game/>  
    </GlobalContext>
  );
}

export default App;
