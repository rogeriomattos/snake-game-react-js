import React, { useContext } from 'react';
import GameContext from "../../../context/GameContext/context";

const PointScreen = () => {
    const { state } = useContext(GameContext);

    return (
        <div>
            Pontuation: {state.pontuation}
        </div>
    )
}

export default PointScreen;