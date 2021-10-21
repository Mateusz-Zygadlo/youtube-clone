import styled from "styled-components";

export const ChannelAboutContainer = styled.div`
    height: auto;
    width: 1070px;
    margin: 16px auto 10px auto;
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