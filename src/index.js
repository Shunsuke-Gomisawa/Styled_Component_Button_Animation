import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import Wrapper from "./Wrapper";
import Button from "./Button";
import LoremIpsum from "./LoremIpsum";

const MenuBar = styled.div`
  background: salmon;
  position: fixed;
  top: 0;
  left: 0;
  height: 20vh;
  width: 100%;
  overflow: hidden;
`;

const App = () => (
  <Wrapper>
    <MenuBar />
    <LoremIpsum />
    <Button>自爆</Button>
  </Wrapper>
);

render(<App />, document.getElementById("root"));
