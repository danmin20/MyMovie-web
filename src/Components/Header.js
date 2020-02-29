import React from "react";
import styled from "styled-components";

const Header = styled.head`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 23px 0px;
  z-index: 2;
`;

export default () => {
  return (
    <Header>
      <div>header</div>
    </Header>
  );
};
