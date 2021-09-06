import React from 'react';
import Square from '../../atoms/Square';

const Fruit = ({top = '0px', left = '0px'}) => {
    return (
        <Square style={{top, left}} />
    )
};

export default Fruit;