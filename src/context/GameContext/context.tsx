import React, { createContext, useState } from "react";

interface Position {
    top: number;
    left: number;
}

//Tipando os dados que quero para usuário
type GameType = {
    fruit: Position;
    snake: Position[];
    pontuation: number;
};

//Tipando as Props do contexto
type PropsGameContext = {
  state: GameType;
  setState: React.Dispatch<React.SetStateAction<GameType>>;
  start: () => void;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    fruit: { top: 10, left: 0 },
    pontuation: 0,
    snake: [
        {top: 240, left: 240},
        {top: 240, left: 250},
        {top: 240, left: 260}
    ]
  } as GameType,
  setState: () => {}, //função de inicialização
  start: () => {}
};

//criando nosso contexto GameContext
const GameContext = createContext<PropsGameContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const GameContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  
  const start = () => {
    alert('new game');
  };

  return (
    <GameContext.Provider
      value={{
        state,
        setState,
        start
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export { GameContextProvider };
export default GameContext;
