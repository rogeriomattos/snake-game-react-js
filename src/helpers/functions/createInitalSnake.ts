import GAME_SETTINGS from "../../gameSettings";
import IPosition from "../contracts/IPosition";

const createInitalSnake = () => {
    const { height, width, squareArea } = GAME_SETTINGS.gameResolution;  
    const top = Math.floor(Math.floor(height/squareArea)/2) * squareArea;
    const left = Math.floor(Math.floor(width/squareArea)/2) * squareArea;
  
    let snake: IPosition[] = [];
  
    for(let i = 0; i < 3; i++){
      snake.push({top, left: left + (squareArea * i)});
    }
  
    return snake;
};

export default createInitalSnake;