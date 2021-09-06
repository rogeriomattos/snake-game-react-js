import React, { createContext, useState } from "react";
import IPosition from '../../helpers/contracts/IPosition';
import MoveDirectionType from "../../helpers/enum/MoveDirectionType";
import getRandomPosition from "../../helpers/functions/getRandomPosition";

//Tipando os dados que quero para usuário
type GameType = {
    fruit: IPosition;
    snake: IPosition[];
    pontuation: number;
    moveDirection: MoveDirectionType;
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
    fruit: getRandomPosition(),
    pontuation: 0,
    moveDirection: MoveDirectionType.BOTTOM,
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
    console.log('new game');
    setState({
      ...state,
      fruit: getRandomPosition(),
    });

    setInterval(() => {
      moveSnake();
    }, 1000);
  };

  const moveSnake = () => {

    let newSnake = state.snake;
    let squareSize = 10;


    const currentSnakeHead = newSnake[newSnake.length - 1];
    switch(state.moveDirection){
      case MoveDirectionType.RIGHT: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top, left: currentSnakeHead.left + squareSize});
        break;
      }
      case MoveDirectionType.LEFT: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top, left: currentSnakeHead.left - squareSize});
        break;
      }
      case MoveDirectionType.TOP: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top - squareSize, left: currentSnakeHead.left});
        break;
      }
      case MoveDirectionType.BOTTOM: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top + squareSize, left: currentSnakeHead.left});
        break;
      }
    }

    setState({
      ...state,
      snake: newSnake,
    });
  }

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
