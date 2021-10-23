import styled from "styled-components";

export const PlaysVideoViews = styled.div`
    display: flex;
    width: 250px;

    @media (max-width: 640px){
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`;