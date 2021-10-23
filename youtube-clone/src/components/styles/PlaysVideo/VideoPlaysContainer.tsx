import styled from "styled-components";

export const VideoPlaysContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 58px;
    margin-bottom: 10px;

    @media (max-width: 1130px){
        flex-direction: column;
    }
`;