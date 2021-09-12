import React from 'react';
import NewGameButton from '../../atoms/NewGameButton';
import DPad from '../../molecules/DPad';
import { MobileControlsContainer, NewGameContainer } from './styles';

const MobileControls = () => {

    return(
        <MobileControlsContainer>
            <DPad/>
            <NewGameContainer>
                <NewGameButton/>
            </NewGameContainer>
        </MobileControlsContainer>
    )
}

export default MobileControls;
