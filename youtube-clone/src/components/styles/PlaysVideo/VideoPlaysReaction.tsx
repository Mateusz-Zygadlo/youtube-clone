import styled from "styled-components";

export const VideoPlaysReaction = styled.div`
    display: flex;

    @media (max-width: 640px){
        width: 70%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`;