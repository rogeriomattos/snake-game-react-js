import React, { useContext } from 'react';
import NewGameButton from '../../atoms/NewGameButton';
import PointScreen from '../../atoms/PointScreen';
import { HeaderContainer } from './styles';
import GameContext from "../../../context/GameContext/context";

const Header: React.FC = () => {
    const { state } = useContext(GameContext);
    
    return(
        <HeaderContainer>
            <h1>Snake Game</h1>
            <div>
                <NewGameButton/>
                {state.isGameOver &&
                <span>GAME OVER</span>
                }
                <PointScreen/>
            </div>
        </HeaderContainer>
    );
};

export default Header;