import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../queries";
import Loader from "../Components/Loader";
import MyMovie from "../Components/MyMovie";

const Constructor = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(4, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Hello = styled.div`
  border: 0px solid #adadad;
  padding-bottom: 10px;
  border-bottom-width: 1px;
`;

export default () => {
  const { data, loading } = useQuery(ME);
  return (
    <>
      <Constructor>
        {loading && <Loader />}
        {!loading && data && data.me && (
          <Hello>안녕하세요, {data.me.name}님!</Hello>
        )}
      </Constructor>
      <Wrapper>
        <Helmet>
          <title>MyPage | MyMovie</title>
        </Helmet>
        {!loading &&
          data &&
          data.me &&
          data.me.movies.map((movie, index) => (
            <MyMovie key={index} data={movie} />
          ))}
      </Wrapper>
    </>
  );
};
