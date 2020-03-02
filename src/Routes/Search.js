import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { SEARCH_MOVIE } from "../queries";
import styled from "styled-components";
import Loader from "../Components/Loader";
import Helmet from "react-helmet";
import MovieCard from "../Components/MovieCard";

const Wrapper = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(4, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

export default withRouter(({ location: { search } }) => {
  const term = decodeURIComponent(search).split("=")[1];
  const { data, loading } = useQuery(SEARCH_MOVIE, {
    skip: term === undefined,
    variables: {
      term,
      start: 1
    }
  });
  console.log(data)
  return (
    <Wrapper>
      <Helmet>
        <title>Search | MyMovie</title>
      </Helmet>
      {term === undefined && <div>let's search</div>}
      {loading && <Loader />}
      {!loading &&
        data &&
        data.naverMovie &&
        data.naverMovie.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))}
    </Wrapper>
  );
});
