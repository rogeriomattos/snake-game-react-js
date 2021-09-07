import React from 'react';
import { BoardContainer } from './styles';
import Fruit from '../../molecules/Fruit';
import Snake from '../../molecules/Snake';
import GAME_SETTINGS from '../../../gameSettings';
const { width, height } = GAME_SETTINGS.gameResolution;
const Board = () => {
    return(
        <BoardContainer 
            style={{width, height}}
        >
            <Fruit/>
            <Snake/>
        </BoardContainer>
    );
};

export default Board;