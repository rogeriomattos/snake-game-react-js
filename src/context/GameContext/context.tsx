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
  const [speedSeconds, setSpeedSeconds] = useState(GAME_SETTINGS.speed.initial);
  const start = () => {
    console.log('new game');
    if(currentIntervalId != undefined)
        clearInterval(currentIntervalId);
    setState({
      ...state,
      fruit: getRandomPosition(),
      snake: createInitalSnake(),
      pontuation: 0
    });
    setSpeedSeconds(GAME_SETTINGS.speed.initial);
    setIsStart(true);
  };

  const gameOver = () => {
    setIsStart(false);
    if(currentIntervalId != undefined)
        clearInterval(currentIntervalId);
  }

  const moveSnake = (removeLastNode = true) => {
    let newSnake = state.snake;
    const { squareArea } = GAME_SETTINGS.gameResolution;


    const currentSnakeHead = newSnake[newSnake.length - 1];
    switch(state.moveDirection){
      case MoveDirectionType.RIGHT: {
        if(removeLastNode)
          newSnake.shift();
        newSnake.push({top: currentSnakeHead.top, left: currentSnakeHead.left + squareArea});
        break;
      }
      case MoveDirectionType.LEFT: {
        if(removeLastNode)
          newSnake.shift();
        newSnake.push({top: currentSnakeHead.top, left: currentSnakeHead.left - squareArea});
        break;
      }
      case MoveDirectionType.TOP: {
        if(removeLastNode)
          newSnake.shift();
        newSnake.push({top: currentSnakeHead.top - squareArea, left: currentSnakeHead.left});
        break;
      }
      case MoveDirectionType.BOTTOM: {
        if(removeLastNode)
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

  const checkSnakeCollidedWithItself = () => {
    const currentSnakeHead = state.snake[state.snake.length - 1];
    if(currentSnakeHead){
      const { left, top } = currentSnakeHead;
      if(state.snake.filter((item) => item.left == left && item.top == top).length > 1){
        gameOver();
      }
    }
  };

  const checkSnakeCollidedWithBorders = () => {
    const currentSnakeHead = state.snake[state.snake.length - 1];
    const { width, height, squareArea } = GAME_SETTINGS.gameResolution;
    if(currentSnakeHead){
      if(currentSnakeHead.left < 0 || currentSnakeHead.left > width - squareArea){
        gameOver();
      }
      if(currentSnakeHead.top < 0 || currentSnakeHead.top > height - squareArea){
        gameOver();
      }
    }
  };

  const verifyColision = () => {
    checkSnakeCollidedWithBorders();
    checkSnakeCollidedWithItself();
  };

  const verifyFruit = () => {
    const currentSnakeHead = state.snake[state.snake.length - 1];
    if(currentSnakeHead.top == state.fruit.top && currentSnakeHead.left == state.fruit.left)
      toEatFruit();
  }

  const toEatFruit = () => {
    moveSnake(false);
    changeSpeed();
    setState({
      ...state,
      fruit: getRandomPosition(),
      pontuation: state.pontuation + 1
    });
  }
  const changeSpeed = () => {
    const { minSpeed, speedDecay } = GAME_SETTINGS.speed;
    if(speedSeconds > minSpeed)
      setSpeedSeconds(speedSeconds - speedDecay);
  };

  useEffect(()=>{
    if(isStart){
      if(currentIntervalId != undefined)
        clearInterval(currentIntervalId);
      moveSnake();
      const intervalId = setInterval(() => moveSnake(), speedSeconds);
      setCurrentIntervalId(intervalId);
    }
  }, [state.moveDirection, isStart, state.fruit]);

  useEffect(() => {
    verifyColision();
    verifyFruit();
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
