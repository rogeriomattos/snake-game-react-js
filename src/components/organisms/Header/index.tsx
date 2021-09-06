import React from 'react';
import StartButton from '../../atoms/StartButton';
import PointScreen from '../../atoms/PointScreen';

const Header: React.FC = () => {
    return(
        <div>
            <h1>Snake Game</h1>
            <div>
                <StartButton/>
                <PointScreen/>
            </div>
        </div>
    );
};

export default Header;