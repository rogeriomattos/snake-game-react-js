import React, { useContext } from 'react';
import GameContext from "../../../context/GameContext/context";

const NewGameButton =() => {
    const { start } = useContext(GameContext);

    return <button onClick={start}>New Game</button>;
};

export default NewGameButton;