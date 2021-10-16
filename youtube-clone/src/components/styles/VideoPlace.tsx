import styled from "styled-components";

interface Props{
    mobileWidth: boolean;
    minimum?: boolean;
}

export const VideoPlace = styled.div<Props>`
    width: ${props => props.mobileWidth ? (props.mobileWidth && props.minimum === true) ? '100%' : 'calc(100% - 80px)' : 'calc(100% - 240px)'};
    height: calc(100% - 56px);
    background-color: yellow;
    display: grid;
    grid-templates-column: repeat(3, 1fr);
    position: relative;
    top: 56px;
    left: ${props => props.mobileWidth ? (props.mobileWidth && props.minimum === true) ? '0px': '80px' : '240px'};
    z-index: -10;
`;