import React, { useContext } from 'react';
import DpadButton from '../../../atoms/DpadButton';
import { IoCaretForward } from "react-icons/io5";
import MoveDirectionType from '../../../../helpers/enum/MoveDirectionType';
import GameContext from '../../../../context/GameContext/context';

const RightButton = () => {
    const { changeDirection } = useContext(GameContext);
    
    return (
        <DpadButton
            onClick={() => changeDirection(MoveDirectionType.RIGHT)}
        >
            <IoCaretForward/>
        </DpadButton>
    )
}

export default RightButton;