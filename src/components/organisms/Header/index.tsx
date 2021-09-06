import React from 'react';
import StartButton from '../../atoms/StartButton';
import PointScreen from '../../atoms/PointScreen';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
    return(
        <HeaderContainer>
            <h1>Snake Game</h1>
            <div>
                <StartButton/>
                <PointScreen/>
            </div>
        </HeaderContainer>
    );
};

export default Header;