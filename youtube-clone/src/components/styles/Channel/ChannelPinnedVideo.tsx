import styled from "styled-components";

export const ChannelPinnedVideo = styled.div`
    height: auto;
    width: 1070px;
    background-color: aqua;
    display: flex;
    margin: 20px auto 0 auto;
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