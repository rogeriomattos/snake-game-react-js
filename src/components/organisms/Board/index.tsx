import React from 'react';
import { BoardContainer } from './styles';
import Fruit from '../../molecules/Fruit';

const Board = () => {
    return(
        <BoardContainer>
            <Fruit/>
        </BoardContainer>
    );
};

export default Board;