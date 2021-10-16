import styled from "styled-components";

interface Props{
    subs?: string;
    mobile?: string;
}

export const Paragraph = styled.p<Props>`
    font-weight: 100;
    font-size: ${props => props.mobile ? '14px' : '18px'};
    margin-left: ${props => props.mobile ? '0px' : '10px'};
    padding: ${props => props.subs ? ' 0  0 10px 15px' : '0px'}
`;