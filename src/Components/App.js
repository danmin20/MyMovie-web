import React from "react";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { HashRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyles from "../GlobalStyles";
import Routes from "./Routes";
import Header from "./Header";
import { ME } from "../queries";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  const { loading, data: me } = useQuery(ME);
  return (
    <>
      <GlobalStyles />
      <Router>
        <>
          {!loading && <Header me={me} isLoggedIn={isLoggedIn} />}
          <Wrapper>
            <Routes />
          </Wrapper>
        </>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </>
  );
};
