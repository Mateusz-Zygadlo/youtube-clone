import styled from "styled-components";

interface Props{
    background?: string;
}

export const LikedVideoBackgroundFirst = styled.img<Props>`
    width: 312px;
    height: 175px;
    background-color: ${props => props.background ? `${props.background}` : 'pink'};
    margin: 20px;

    @media (max-width: 1100px){
        width: 230px;
        height: 150px;
    }
`;