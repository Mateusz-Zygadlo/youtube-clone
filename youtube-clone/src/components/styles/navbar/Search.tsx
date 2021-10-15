import styled from "styled-components";

interface Props{ 
    center?: string;
}

export const Search = styled.div<Props>`
    width: 728px;
    height: 56px;
    display: flex;
    justify-content: ${props => props.center ? 'center' : 'flex-end'};
    align-items: center;
`;