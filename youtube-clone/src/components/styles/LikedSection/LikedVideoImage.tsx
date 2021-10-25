import styled from "styled-components";

interface Props{
    background?: string;
}

export const LikedVideoImage = styled.div<Props>`
    width: 150px;
    height: 80%;
    background-color: ${props => props.background ? `${props.background}` : 'pink'};
    margin-right: 10px;
    margin: auto 10px;
`;