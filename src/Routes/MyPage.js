import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default () => {
  return (
    <Wrapper>
      <Helmet>
        <title>MyPage | MyMovie</title>
      </Helmet>
    </Wrapper>
  );
};
