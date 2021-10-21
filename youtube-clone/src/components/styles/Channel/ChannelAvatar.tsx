import styled from "styled-components";

interface Props{
    noMargin?: string;
}

export const ChannelAvatar = styled.img<Props>`
    width: 80px;
    height: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: pink;
    border-radius: 50%;
    margin-right: ${props => props.noMargin ? null : '20px;'}
`;