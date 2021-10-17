import styled from "styled-components";

export const VideoSection = styled.div`
    position: relative;
    top: 56px;
    width: 100%;
    height: 100%;
    background-color: orange;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, 275px);
`;