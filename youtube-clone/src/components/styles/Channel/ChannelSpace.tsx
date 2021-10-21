import styled from "styled-components";

export const ChannelSpace = styled.div`
    width: 1050px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(7, 150px);
    grid-template-rows: repeat(auto-fill, 185px);
    margin: 0 auto;

    @media (max-width: 1330px){
        width: 750px;
        grid-template-columns: repeat(5, 150px);
    }
    @media (max-width: 1000px){
        width: 600px;
        grid-template-columns: repeat(4, 150px);
    }
    @media (max-width: 800px){
        width: 450px;
        grid-template-columns: repeat(3, 150px);
    }
`;