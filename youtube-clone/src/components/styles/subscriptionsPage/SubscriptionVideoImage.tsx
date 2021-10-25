import styled from "styled-components";

interface Props{
    background?: string;
}

export const SubscriptionVideoImage = styled.div<Props>`
    width: 100%;
    height: 54%;
    background-color: ${props => props.background ? `${props.background}` : 'pink'};
`;