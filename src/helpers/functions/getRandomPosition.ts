import IPosition from "../contracts/IPosition";

const getRandomPosition = ():IPosition => {
    
    const left = getRandomInt() * 10;
    const top = getRandomInt() * 10;
    
    return { left, top};
};

const getRandomInt = () => {
    const min = 0;
    const max = 48;
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomPosition;