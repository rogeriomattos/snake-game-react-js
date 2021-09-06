import React, { useContext } from 'react';
import Square from '../../atoms/Square';
import GameContext from "../../../context/GameContext/context";

const Snake = () => {
    const { state } = useContext(GameContext);
    
    return (
        <>
            {state.snake.map(({top, left})=>(
                <Square style={{top, left}}/>
            ))}
        </>
    );
};

export default Snake;