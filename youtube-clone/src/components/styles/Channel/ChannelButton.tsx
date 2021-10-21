import styled from "styled-components";

interface Props{
    tiny?: string;
    subscribe?: string;
}

export const ChannelButton = styled.button<Props>`
    background-color: ${props => props.subscribe ? 'white' : 'red'};
    color: ${props => props.subscribe ? 'black' : 'white'};
    border: ${props => props.subscribe ? '1px solid black' : 'none'};
    font-size: 17px;
    border-radius: 2px;
    height: ${props => props.tiny ? '30px' : '40px'};
    padding: 8px 16px;
    padding: ${props => props.tiny ? '2px' : '8px 16px'};
    margin: auto 0;
    cursor: pointer;
`;