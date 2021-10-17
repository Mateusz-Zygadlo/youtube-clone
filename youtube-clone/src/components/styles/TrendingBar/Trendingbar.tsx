import styled from "styled-components";

interface Props{
    mobileWidth: boolean;
    minimum: boolean;
}

export const TrendingBar = styled.div<Props>`
    position: fixed;
    width: 100%;
    height: 56px;
    background-color: white;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    color: black;
    overflow-x: scroll;
    width: ${props => props.mobileWidth ? (props.mobileWidth && props.minimum === true) ? '100%' : 'calc(100% - 85px)' : 'calc(100% - 240px)'};
    left: ${props => props.mobileWidth === true ? (props.minimum === true) ? '0px' : '85px'  : '240px'};
    z-index: 10;
`;