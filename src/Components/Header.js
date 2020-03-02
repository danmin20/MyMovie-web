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
  background-color: white;
  padding: 23px 0px;
  border: 0px solid #adadad;
  border-bottom-width: 0.5px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Row = styled.div`
  width: 100%;
  margin: 0 50px;
  text-align: center;
`;

const Menu = styled.div`
  width: 100px;
  background-color: gray;
  border-radius: 30px;
  padding: 10px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  :hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
`;

const Name = styled.div`
  font-size: 20px;
  margin-top: 7px;
  position: flex;
  text-align: center;
`;

const Page = styled.div`
  font-size: 10px;
  color: white;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  return (
    <Header>
      <HeaderWrapper>
        <Row />
        <Row>
          <Link to="/">
            <Name>마이무비</Name>
          </Link>
        </Row>
        <Row>
          {isLoggedIn ? (
            <Link to="/mypage">
              <Menu>
                <Page>My Page</Page>
              </Menu>
            </Link>
          ) : (
            <Link to="/auth">
              <Menu>
                <Page>Authorization</Page>
              </Menu>
            </Link>
          )}
        </Row>
      </HeaderWrapper>
    </Header>
  );
};
