import React from 'react';
import { ButtonElement } from './styles';
import { IconType } from 'react-icons';
 
interface IProps {
    onClick: () => void;
}

const DpadButton: React.FC<IProps> = ({onClick, children}) => {
    return (
        <ButtonElement onClick={onClick}>
            {children}
        </ButtonElement>
    )
}

export default DpadButton;