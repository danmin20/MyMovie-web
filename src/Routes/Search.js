import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { SEARCH_MOVIE } from "../queries";
import styled from "styled-components";
import Loader from "../Components/Loader";

const Wrapper = styled.div``;

export default withRouter(({ location: { search } }) => {
  const term = decodeURIComponent(search).split("=")[1];
  const { data, loading } = useQuery(SEARCH_MOVIE, {
    skip: term === undefined,
    variables: {
      term,
      start: 1
    }
  });
  {
    !loading &&
      data &&
      data.naverMovie &&
      data.naverMovie.map((movie, index) => console.log(movie, index));
  }
  return (
    <Wrapper>
      {loading && <Loader />}
      <div style={{ height: 100, backgroundColor: "red" }}>
        {!loading &&
          data &&
          data.naverMovie &&
          data.naverMovie.map((movie, index) => (
            <div style={{ backgroundColor: "black" }} key={index}>
              {movie.title}
            </div>
          ))}
      </div>
    </Wrapper>
  );
});
