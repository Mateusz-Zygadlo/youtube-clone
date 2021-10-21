import styled from "styled-components";

interface Props{
    borderBottom?: string;
}

export const ChannelVideoParagraph = styled.p<Props>`
    font-size: 18px;
    margin: 10px 0;
    padding-bottom: ${props => props.borderBottom ? '5px' : null};
    border-bottom: ${props => props.borderBottom ? '1px solid black' : null};
`;