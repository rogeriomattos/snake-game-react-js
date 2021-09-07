import React from 'react';
import GAME_SETTINGS from '../../../gameSettings';
import { SquareDesign } from './styles';
const { squareArea } = GAME_SETTINGS.gameResolution;

interface IProps {
    style?: React.CSSProperties;
}

const Square: React.FC<IProps> = ({style}) => {
    return <SquareDesign style={{...style, width: squareArea, height: squareArea}}/>
};

export default Square;