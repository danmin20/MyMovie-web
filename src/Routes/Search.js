import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { SEARCH_MOVIE } from "../queries";
import styled from "styled-components";
import Loader from "../Components/Loader";
import Helmet from "react-helmet";
import MovieCard from "../Components/MovieCard";
import { gql } from "apollo-boost";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

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

export default withRouter(({ location: { search } }) => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);
  const term = decodeURIComponent(search).split("=")[1];
  const { data, loading } = useQuery(SEARCH_MOVIE, {
    skip: term === undefined,
    variables: {
      term,
      start: 1
    }
  });
  return (
    <>
      <Constructor>{loading && <Loader />}</Constructor>
      <Wrapper>
        <Helmet>
          <title>Search | MyMovie</title>
        </Helmet>
        {term === undefined && <div>let's search</div>}
        {!loading &&
          data &&
          data.naverMovie &&
          data.naverMovie.map((movie, index) => (
            <MovieCard key={index} data={movie} isLoggedIn={isLoggedIn} />
          ))}
      </Wrapper>
    </>
  );
});
