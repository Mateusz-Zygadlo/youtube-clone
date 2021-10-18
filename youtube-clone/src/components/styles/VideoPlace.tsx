import styled from "styled-components";

interface Props{
    mobileWidth: boolean;
    minimum?: boolean;
}

export const VideoPlace = styled.div<Props>`
    width: ${props => props.mobileWidth === true ? (props.minimum === true) ? '100%' : 'calc(100% - 85px)' : 'calc(100% - 240px)'};
    height: calc(100% - 56px);
    position: relative;
    top: 56px;
    padding: 0;
    margin: 0;
    left: ${props => props.mobileWidth === true ? (props.minimum === true) ? '0px' : '85px'  : '240px'};
`;