import React, { useContext, useState } from 'react';
import Square from '../../atoms/Square';

import GameContext from "../../../context/GameContext/context";

const Fruit = () => {

    const { state } = useContext(GameContext);
    const { top, left } = state.fruit;
    
    return (
        <Square style={{top, left}} />
    )
};

export default Fruit;