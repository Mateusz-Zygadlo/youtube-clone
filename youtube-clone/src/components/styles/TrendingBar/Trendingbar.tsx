import styled from "styled-components";

interface Props{
    mobileWidth: boolean;
    minimum: boolean;
}

export const TrendingBar = styled.div<Props>`
    position: fixed;
    width: ${props => props.mobileWidth ? (props.mobileWidth && props.minimum === true) ? '100%' : 'calc(100% - 82px)' : 'calc(100% - 240px)'};
    height: 56px;
    background-color: white;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    color: black;
    overflow-x: scroll;
    margin-left: ${props => props.mobileWidth ? '-5px' : '0px'};
`;