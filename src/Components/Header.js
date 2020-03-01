import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  padding: 23px 0px;
  border: 0px solid #adadad;
  border-bottom-width: 0.5px;
  z-index: 2;
`;

export default () => {
  return (
    <Header>
      <Link to={"/"}>
        <div>마이무비</div>
      </Link>
    </Header>
  );
};
