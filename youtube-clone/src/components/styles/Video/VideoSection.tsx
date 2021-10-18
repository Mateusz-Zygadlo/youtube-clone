import styled from "styled-components";

export const VideoSection = styled.div`
    position: relative;
    top: 56px;
    width: 1200px;
    height: 100%;
    background-color: orange;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, 275px);
    margin: 0 auto;

    @media (max-width: 1150px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 610px){
        grid-template-columns: repeat(1, 1fr);
    }
    @media(max-width: 1460px){
        width: 1100px;
    }
    @media (max-width: 1370px){
        width: 1000px;
    }
    @media (max-width: 1300px){
        width: 1150px;
    }
    @media(max-width: 1260px){
        width: 1050px;
    }
    @media (max-width: 1160px){
        width: 950px;
    }
    @media (max-width: 1050px){
        width: 850px;
    }
    @media (max-width: 950px){
        width: 800px;
    }
    @media (max-width: 900px){
        width: 700px;
    }
    @media (max-width: 800px){
        width: 600px;
    }
    @media (max-width: 650px){
        width: 550px;
    }
    @media (max-width: 580px){
        width: 500px;
    }
    @media (max-width: 520px){
        width: 450px;
    }
`;