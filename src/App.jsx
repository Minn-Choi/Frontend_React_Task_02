import { styled, ThemeProvider } from "styled-components";

import { Outlet } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  background-color: white;

  /* * {
    border: 1px solid black;
  } */
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        {/* <h3>오늘 세션도 화이팅</h3> */}
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
