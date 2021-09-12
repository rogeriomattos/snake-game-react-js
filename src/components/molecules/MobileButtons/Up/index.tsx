import React, { useContext } from 'react';
import DpadButton from '../../../atoms/DpadButton';
import { IoCaretUp } from "react-icons/io5";
import MoveDirectionType from '../../../../helpers/enum/MoveDirectionType';
import GameContext from '../../../../context/GameContext/context';

const UpButton = () => {
    const { changeDirection } = useContext(GameContext);
    
    return (
        <DpadButton
            onClick={() => changeDirection(MoveDirectionType.TOP)}
        >
            <IoCaretUp/>
        </DpadButton>
    )
}

export default UpButton;