import styled from "styled-components";

export const MoviesVideoSpace = styled.div`
    width: 1070px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, 215px);
    grid-template-rows: repeat(auto-fill, 350px);
    margin: 0 auto;

    @media (max-width: 1330px){
        width: 850px;
        grid-template-columns: repeat(4, 215px);
    }
    @media (max-width: 1000px){
        width: 640px;
        grid-template-columns: repeat(3, 215px);
    }
    @media (max-width: 800px){
        width: 430px;
        grid-template-columns: repeat(2, 215px);
    }
`;