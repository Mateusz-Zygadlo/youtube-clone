import React from "react";
import styled from "styled-components";
import { ContainerApp } from "./styles/Container";
import { GlobalStyle } from "./styles/GlobalStyle";

const App: React.FC = () => {
  return (
    <ContainerApp>
      <GlobalStyle />
      <Paragraph>hello youtube clone</Paragraph>
    </ContainerApp>
  );
}

const Paragraph = styled.h1`
  font-size: 60px;
  color: orange;
  font-weight: 100;
`;

export default App;