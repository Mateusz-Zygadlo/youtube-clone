import styled from "styled-components";

interface Props{
    padding?: string;
}

export const Input = styled.input<Props>`
    width: 572px;
    height: 40px;
    margin-left: ${props => props.padding ? '0px' : '40px'};
    text-indent: 10px;
    border: 1px solid lightgray;

    @media (max-width: 700px){
        width: 400px;
    }
    @media (max-width: 520px){
        width: 300px;
    }
    @media (max-width: 440px){
        width: 250px;
    }
`;