import styled from "styled-components";

export const ChannelVideoSpace = styled.div`
    width: 1053px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, 210px);
    grid-template-rows: repeat(auto-fill, 185px);
    margin: 0 auto;

    @media (max-width: 1330px){
        width: 840px;
        grid-template-columns: repeat(4, 210px);
    }
    @media (max-width: 1000px){
        width: 630px;
        grid-template-columns: repeat(3, 210px);
    }
    @media (max-width: 800px){
        width: 420px;
        grid-template-columns: repeat(2, 210px);
    }
`;