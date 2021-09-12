import React, { useContext } from 'react';
import GameContext from "../../../context/GameContext/context";
import { ButtonElement } from './styles';

const NewGameButton: React.FC<{styles?: React.CSSProperties}> =({styles}) => {
    const { start } = useContext(GameContext);

    return <ButtonElement style={{fontFamily: "'Press Start 2P', cursive", ...styles}} className="nes-btn is-primary" onClick={start}>New Game</ButtonElement>;
};
 
export default NewGameButton;