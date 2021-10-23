import styled from "styled-components";

export const PlaysVideoReactionStats = styled.div`
    width: 100%;
    margin: 10px 0;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    align-items: center;

    @media (max-width: 640px){
        height: 60px;
    }
`;