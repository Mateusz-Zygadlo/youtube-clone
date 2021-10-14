import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Paragraph>hello youtube clone</Paragraph>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.h1`
  font-size: 60px;
  color: orange;
  font-weight: 100;
`;

export default App;