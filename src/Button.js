import styled from "styled-components";

// Create a <Title> react component that
// renders an <h1> which is centered, palevioletred and sized at 1.5em
export default styled.button`
  position: relative;
  background-color: yellow;
  border: none;
  border-radius: 89px;
  color: #000;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
  width: 100%;
  z-index: 1;
  &:before {
    border-radius: 90px;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: red;
    position: absolute;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 50%;
    transition: transform ease-in-out 0.5s;
  }
  &:hover {
    color: white;
    &:before {
      transform: scaleX(1);
    }
  }
`;
