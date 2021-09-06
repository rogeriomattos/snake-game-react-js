import React from 'react';
import { BoardContainer } from './styles';
import Fruit from '../../molecules/Fruit';
import Snake from '../../molecules/Snake';

const Board = () => {
    return(
        <BoardContainer>
            <Fruit/>
            <Snake/>
        </BoardContainer>
    );
};

export default Board;