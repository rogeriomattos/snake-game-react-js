import React, { createContext, useState } from "react";
import { useEffect } from "react";
import GAME_SETTINGS from "../../gameSettings";
import IPosition from '../../helpers/contracts/IPosition';
import MoveDirectionType from "../../helpers/enum/MoveDirectionType";
import createInitalSnake from "../../helpers/functions/createInitalSnake";
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
  changeDirection: (newDirection: MoveDirectionType) => void;
};



//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    fruit: getRandomPosition(),
    pontuation: 0,
    moveDirection: MoveDirectionType.RIGHT,
    snake: createInitalSnake()
  } as GameType,
  setState: () => {}, //função de inicialização
  start: () => {},
  changeDirection: (newDirection: MoveDirectionType) => {}
};

//criando nosso contexto GameContext
const GameContext = createContext<PropsGameContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const GameContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  const [currentIntervalId, setCurrentIntervalId] = useState<NodeJS.Timeout>();
  const [isStart, setIsStart] = useState(false);
  const start = () => {
    console.log('new game');
    if(currentIntervalId != undefined)
        clearInterval(currentIntervalId);
    setState({
      ...state,
      fruit: getRandomPosition(),
      snake: createInitalSnake()
    });
    setIsStart(true);
  };

  const gameOver = () => {
    setIsStart(false);
    if(currentIntervalId != undefined)
        clearInterval(currentIntervalId);
  }

  const moveSnake = () => {
    let newSnake = state.snake;
    const { squareArea } = GAME_SETTINGS.gameResolution;


    const currentSnakeHead = newSnake[newSnake.length - 1];
    switch(state.moveDirection){
      case MoveDirectionType.RIGHT: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top, left: currentSnakeHead.left + squareArea});
        break;
      }
      case MoveDirectionType.LEFT: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top, left: currentSnakeHead.left - squareArea});
        break;
      }
      case MoveDirectionType.TOP: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top - squareArea, left: currentSnakeHead.left});
        break;
      }
      case MoveDirectionType.BOTTOM: {
        newSnake.shift();
        newSnake.push({top: currentSnakeHead.top + squareArea, left: currentSnakeHead.left});
        break;
      }
      
    }
    //clearInterval(state.intervalId);
    setState({
      ...state,
      snake: newSnake,
    });
  }

  const changeDirection = (newDirection: MoveDirectionType) => {
    setState({
      ...state,
      moveDirection: newDirection,
    });
  }

  const verifyColision = () => {
    const currentSnakeHead = state.snake[state.snake.length - 1];
    console.log('currentSnakeHead', currentSnakeHead);
    const { width, height, squareArea } = GAME_SETTINGS.gameResolution;
    if(currentSnakeHead){
      if(currentSnakeHead.left < 0 || currentSnakeHead.left > width - squareArea){
        console.log('bateu');
        gameOver();
      }
      if(currentSnakeHead.top < 0 || currentSnakeHead.top > height - squareArea){
        console.log('bateu');
        gameOver();
      }
    }
  };

  useEffect(()=>{
    if(isStart){
      if(currentIntervalId != undefined)
        clearInterval(currentIntervalId);
      moveSnake();
      const intervalId = setInterval(moveSnake, 1000);
      setCurrentIntervalId(intervalId);
    }
  }, [state.moveDirection, isStart]);

  useEffect(() => {
    verifyColision();
  }, [JSON.stringify(state.snake)]);

  return (
    <GameContext.Provider
      value={{
        state,
        setState,
        start,
        changeDirection
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export { GameContextProvider };
export default GameContext;
