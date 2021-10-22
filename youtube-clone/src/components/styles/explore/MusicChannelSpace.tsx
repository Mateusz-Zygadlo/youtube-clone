import styled from "styled-components";

export const MusicChannelSpace = styled.div`
    width: 900px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: repeat(auto-fill, 122px);
    margin: 0 auto;

    @media (max-width: 1000px){
        width: 600px;
        grid-template-columns: repeat(2, 300px);
    }
    @media (max-width: 630px){
        width: 300px;
        grid-template-columns: repeat(1, 300px);
    }
`;