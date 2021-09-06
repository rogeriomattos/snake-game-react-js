import styled from 'styled-components';

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 490px;
    border: 1px solid #000;

    &:focus {
        outline: none;
    }
`;