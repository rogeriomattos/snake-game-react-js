import React from 'react';
import NewGameButton from '../../atoms/NewGameButton';
import PointScreen from '../../atoms/PointScreen';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
    
    return(
        <HeaderContainer>
            <h1 className="title">Snake Game</h1>
            <div>
                <NewGameButton/>
                <PointScreen/>
            </div>
        </HeaderContainer>
    );
};

export default Header;