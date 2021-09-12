import React, { useContext } from 'react';
import GameContext from "../../../context/GameContext/context";
import { ButtonElement } from './styles';

const NewGameButton =() => {
    const { start } = useContext(GameContext);

    return <ButtonElement style={{fontFamily: "'Press Start 2P', cursive"}} className="nes-btn is-primary" onClick={start}>New Game</ButtonElement>;
};
 
export default NewGameButton;