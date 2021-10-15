import styled from "styled-components";

interface Props{
    right?: string;
}

export const SearchButton = styled.button<Props>`
    width: 64px;
    height: 40px;
    position: relative;
    right: ${props => props.right ? '0%' : '5%'};
    border: 1px solid lightgray;
    background-color: #F8F8F8;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;