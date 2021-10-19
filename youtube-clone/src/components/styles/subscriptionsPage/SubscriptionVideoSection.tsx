import styled from "styled-components";

export const SubscriptionVideoSection = styled.div`
    width: 1000px;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: repeat(auto-fill, 210px);
    margin: 0 auto;

    @media (max-width: 1180px){
        grid-template-columns: repeat(3, 250px);
        width: 750px;
    }
    @media (max-width: 860px){
        grid-template-columns: repeat(2, 250px);
        width: 500px;
    }
    @media (max-width: 550px){
        grid-template-columns: repeat(1, 250px);
        width: 250px;
    }
`;