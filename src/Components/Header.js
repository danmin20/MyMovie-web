import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

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
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  return (
    <Header>
      <Link to="/">
        <div>마이무비</div>
      </Link>
      {isLoggedIn ? (
        <Link to="/mypage">
          <div>마이페이지</div>
        </Link>
      ) : (
        <Link to="/auth">
          <div>로그인</div>
        </Link>
      )}
    </Header>
  );
};
