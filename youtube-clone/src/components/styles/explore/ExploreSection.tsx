import styled from "styled-components";

export const ExploreSection = styled.div`
    width: 1075px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, 215px);
    grid-template-rows: repeat(auto-fill, 120px);
    padding-bottom: 20px;
    padding-top: 10px;
    border-bottom: 1px solid black;
    margin: 0 auto;
    align-items: center;
    justify-items: center;

    @media (max-width: 1350px){
        grid-template-columns: repeat(4, 215px);
        width: 860px;
    }
    @media (max-width: 980px){
        grid-template-columns: repeat(3, 215px);
        width: 645px;
    }
    @media (max-width: 780px){
        grid-template-columns: repeat(2, 215px);
        width: 430px;
    }
`;