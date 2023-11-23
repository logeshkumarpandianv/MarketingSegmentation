import styled from "styled-components";
import Navbar from "./Navbar";
import "@fontsource/poppins";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: var(--bg-color);
  font-size: var(--font-m);
  font-family: "Poppins";
  padding: 0px 20px;
`;
const Body = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
  padding-top: 20px;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Body>{children}</Body>
    </Container>
  );
};

export default Layout;
