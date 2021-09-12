import React, { useContext } from 'react';
import DpadButton from '../../../atoms/DpadButton';
import { IoCaretDown } from "react-icons/io5";
import MoveDirectionType from '../../../../helpers/enum/MoveDirectionType';
import GameContext from '../../../../context/GameContext/context';

const DownButton = () => {
    const { changeDirection } = useContext(GameContext);
    
    return (
        <DpadButton
            onClick={() => changeDirection(MoveDirectionType.BOTTOM)}
        >
            <IoCaretDown/>
        </DpadButton>
    )
}

export default DownButton;