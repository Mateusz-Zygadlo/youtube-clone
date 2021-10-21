import styled from "styled-components";

export const ChannelVideoContainer = styled.div`
    height: auto;
    width: 1070px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px auto 10px auto;
    padding-bottom: 20px;
    border-bottom: 1px solid black;

    @media (max-width: 1320px){
        width: 900px;
    }
    @media (max-width: 1000px){
        width: 800px;
    }
    @media (max-width: 900px){
        width: 700px;
    }
    @media (max-width: 800px){
        width: 600px;
    }
    @media (max-width: 620px){
        width: 500px;
    }
    @media (max-width: 520px){
        width: 450px;
    }
`;