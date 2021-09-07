import styled from 'styled-components';

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* border: 1px solid #000; */
    padding: 0;
    &:focus {
        outline: none;
    }
`;