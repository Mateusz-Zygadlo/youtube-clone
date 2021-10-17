import styled from "styled-components";

interface Props{
    mobileWidth: boolean;
    minimum?: boolean;
    isOk?: boolean;
}

export const VideoPlace = styled.div<Props>`
    width: ${props => props.mobileWidth ? ( props.minimum === true) ? '100vw' : 'calc(100% - 85px)' : 'calc(100% - 240px)'};
    height: calc(100% - 56px);
    background-color: yellow;
    display: grid;
    grid-templates-column: repeat(3, 1fr);
    position: relative;
    top: 56px;
    left: ${props => props.mobileWidth ? ( props.minimum === true) ? '0px': '82px' : '240px'};
`;