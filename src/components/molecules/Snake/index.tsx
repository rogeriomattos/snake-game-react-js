import React from 'react';
import Square from '../../atoms/Square';

const Snake = () => {

    const shape = [
        {top: 240, left: 240},
        {top: 240, left: 250},
        {top: 240, left: 260}
    ]

    return (
        <>
            {shape.map(({top, left})=>(
                <Square style={{top, left}}/>
            ))}
        </>
    );
};

export default Snake;