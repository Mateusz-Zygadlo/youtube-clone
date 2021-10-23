import styled from "styled-components";

interface Props{
    marginBottom?: string;
}

export const CategoryCard = styled.div<Props>`
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    padding: 0 24px;
    margin-bottom: ${props => props.marginBottom ? '10px': null}

    &:hover{
        background-color: lightgray;
    }
`;