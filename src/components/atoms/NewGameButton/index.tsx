import React, { useContext } from 'react';
import GameContext from "../../../context/GameContext/context";

const NewGameButton =() => {
    const { start } = useContext(GameContext);

    return <button style={{fontFamily: "'Press Start 2P', cursive"}} className="nes-btn is-primary" onClick={start}>New Game</button>;
};

export default NewGameButton;