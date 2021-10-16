import styled from "styled-components";

interface Props{
    fixed?: string;
}

export const CategoryContainer = styled.div<Props>`
    width: 240px;
    height: 100%;
    overflow-y: scroll;
    position: ${props => props.fixed ? 'fixed' : 'static'}
`;