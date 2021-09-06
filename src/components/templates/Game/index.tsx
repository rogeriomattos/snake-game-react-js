import React from 'react';
import Board from '../../organisms/Board';
import Header from '../../organisms/Header';

const Game = () => {
    return (
        <div
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
        </div>
    );
};

export default Game;