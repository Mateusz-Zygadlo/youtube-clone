import styled from "styled-components";

interface Props{
    mobile?: string;
}

export const Icon = styled.span<Props>`
    width: ${props => !props.mobile ? '40px': '100%'};
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;