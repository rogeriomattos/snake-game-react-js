import React, { useContext } from 'react';
import DpadButton from '../../../atoms/DpadButton';
import { IoCaretBack } from "react-icons/io5";
import MoveDirectionType from '../../../../helpers/enum/MoveDirectionType';
import GameContext from '../../../../context/GameContext/context';

const LeftButton = () => {
    const { changeDirection } = useContext(GameContext);
    
    return (
        <DpadButton
            onClick={() => changeDirection(MoveDirectionType.LEFT)}
        >
            <IoCaretBack/>
        </DpadButton>
    )
}

export default LeftButton;