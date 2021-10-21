import styled from "styled-components";

export const PinnedVideoInfo = styled.div`
    width: 330px;

    @media (max-width: 900px){
        width: 240px;
    }
    @media (max-width: 800px){
        display: none;
    }
`;