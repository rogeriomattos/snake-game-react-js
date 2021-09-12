import styled from 'styled-components';

export const HeaderContainer = styled.div`
    border-bottom: 4px solid #000;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    
    h1 {
        margin: 0;
        padding: 0;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    @media (max-width:700px) {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
            font-size: 1.2rem;
        }
        div{
            justify-content: flex-end;
            button {
                display: none;
            }
        }

    }

`;