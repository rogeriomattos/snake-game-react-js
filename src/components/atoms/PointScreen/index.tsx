import React, { useContext } from 'react';
import GameContext from "../../../context/GameContext/context";
import { PointScreenContainer } from './styles';

const PointScreen = () => {
    const { state } = useContext(GameContext);

    return (
        <PointScreenContainer>
            Score: {state.pontuation}
        </PointScreenContainer>
    )
}

export default PointScreen;