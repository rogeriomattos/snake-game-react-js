import styled from 'styled-components';

export const MobileControlsContainer = styled.div`
    position: relative;
    padding: 20px;
    display: none;
    @media (max-width:700px) {
        display: block;
    }
`;

export const NewGameContainer = styled.div`
    position: absolute;
    top: 4px;
    left: 4px;
`;