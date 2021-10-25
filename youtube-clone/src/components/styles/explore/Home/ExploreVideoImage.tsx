import styled from "styled-components";

interface Props{
    background?: string;
}

export const ExploreVideoImage = styled.div<Props>`
    width: 246px;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${props => props.background ? `${props.background}`: 'pink'};
    margin-right: 10px;
`;