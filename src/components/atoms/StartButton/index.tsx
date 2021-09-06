import React, { useContext } from 'react';
import GameContext from "../../../context/GameContext/context";

const StartButton =() => {
    const { start } = useContext(GameContext);

    return <button onClick={start}>Start</button>;
};

export default StartButton;