import GAME_SETTINGS from "../../gameSettings";
import IPosition from "../contracts/IPosition";
const { width, height, squareArea } = GAME_SETTINGS.gameResolution;

const getRandomPosition = ():IPosition => {
    let left = getRandomInt(0, width/squareArea) * squareArea;
    let top = getRandomInt(0, height/squareArea) * squareArea;
    
    if(left == width)
        left = left - squareArea;
    if(top == height)
        top = top - squareArea;
    
    return { left, top};
};

const getRandomInt = (min: number, max: number) => {   
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomPosition;