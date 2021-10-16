import styled from "styled-components";

interface Props{
    border?: string;
}

export const MoreCategory = styled.div<Props>`
    width: 100%;
    padding: 12px 0;
    border-bottom: ${ props => props.border ? ' ' : '1px solid black'};
    background-color: white;
`;