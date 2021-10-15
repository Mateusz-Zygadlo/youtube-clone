import styled from "styled-components";

interface Props{
    margin?: string;
}

export const Microphone = styled.span<Props>`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #F8F8F8;
    position: relative;
    right: 4%;
    cursor: pointer;
    
    @media (max-width: 1000px){
        width: 60px;
    }

    @media (max-width: 700px){
        right: ${props => props.margin ? '-1%' : '0%'};
        width: 40px;
    }
`;