import React, { useContext } from 'react';
import GameContext from '../../../context/GameContext/context';
import NewGameButton from '../../atoms/NewGameButton';
const GameOverDialog = () => { 

    const { state } = useContext(GameContext);

    return (
        <dialog className="nes-dialog is-dark" id="dialog-dark" open={state.isGameOver}>
            <form style={{textAlign: 'center'}} method="dialog">
                <p className="title">GAME OVER</p>
                <p>Your score: {state.pontuation}</p>
                
                <NewGameButton/>
                
            </form>
        </dialog>
    );
};

export default GameOverDialog;