import React from 'react';
import { SquareDesign } from './styles';

interface IProps {
    style: React.CSSProperties;
}

const Square: React.FC<IProps> = ({style}) => {
    return <SquareDesign style={style}/>
};

export default Square;