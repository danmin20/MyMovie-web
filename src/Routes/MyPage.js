import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../queries";
import Loader from "../Components/Loader";
import MyMovie from "../Components/MyMovie";

const Wrapper = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(4, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

export default () => {
  const { data, loading } = useQuery(ME);
  !loading && console.log(data);
  return (
    <Wrapper>
      <Helmet>
        <title>MyPage | MyMovie</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.me &&
        data.me.movies.map((movie, index) => (
          <MyMovie key={index} data={movie} />
        ))}
    </Wrapper>
  );
};
