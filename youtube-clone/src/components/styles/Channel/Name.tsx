import styled from "styled-components";

export const Name = styled.h1`
    font-size: 16px;
    margin: auto 32px;
    font-weight: 100;

    @media (max-width: 900px){
        margin: auto 25px;
    }
    @media (max-width: 800px){
        margin: auto 20px;
    }
    @media (max-width: 620px){
        margin: auto 10px;
    }
    @media (max-width: 520px){
        margin: auto 6px;
    }
`;