import React from 'react';
import Board from '../../organisms/Board';
import Header from '../../organisms/Header';
import { GameContainer } from './styles';

const Game = () => {
    return (
        <GameContainer
            role="button"
            tabIndex={0}
            onKeyUp={()=>{
            console.log('keyup')
            }}
            onKeyDown={()=>{
            console.log('keydown')
            }}
        >
            <Header/>
            <Board/>
        </GameContainer>
    );
};

export default Game;