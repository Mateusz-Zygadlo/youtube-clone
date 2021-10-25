import styled from "styled-components";

interface Props{
    background?: string;
}

export const VideoImage = styled.img<Props>`
    width: 100%;
    height: 58%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${props => props.background ? `${props.background}`: 'pink'};
`;