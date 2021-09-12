import styled from "styled-components";

export const ButtonElement = styled.button`
    width: 50px;
    height: 50px;
    padding: 0;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus, &:active {
        outline: none;
    }
    &:active {
        opacity: 0.2;
    }

    svg, i {
        font-size: 1.5rem;
    }
`;