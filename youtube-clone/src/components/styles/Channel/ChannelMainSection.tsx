import styled from "styled-components";

export const ChannelMainSection = styled.div`
    height: 80px;
    width: 1070px;
    background-color: lightgray;
    margin: 16px auto 0 auto;
    display: flex;
    justify-content: space-between;

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