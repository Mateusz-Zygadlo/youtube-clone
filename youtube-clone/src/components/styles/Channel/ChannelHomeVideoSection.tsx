import styled from "styled-components";

export const ChannelHomeVideoSection = styled.div`
    width: 1053px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, 210px);
    margin: 0 auto;

    @media (max-width: 1330px){
        width: 840px;
        div:nth-child(5){
            display: none;
        }
    }
    @media (max-width: 1000px){
        width: 630px;
        div:nth-child(4){
            display: none;
        }
    }
    @media (max-width: 800px){
        width: 420px;
        div:nth-child(3){
            display: none;
        }
    }
`;