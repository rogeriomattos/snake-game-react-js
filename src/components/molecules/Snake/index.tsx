import React, { useContext } from 'react';
import Square from '../../atoms/Square';
import GameContext from "../../../context/GameContext/context";

const Snake = () => {
    const { state } = useContext(GameContext);
    
    return (
        <>
            {state.snake.map(({top, left}, index)=>(
                <Square key={'snake_'+index} style={{top, left, border:'1px solid #ddd'}}/>
            ))}
        </>
    );
};

export default Snake;