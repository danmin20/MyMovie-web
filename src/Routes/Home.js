import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { BOX_WEEK } from "../queries";
import Helmet from "react-helmet";
import Loader from "../Components/Loader";
import { getDate } from "../getDate";

const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxOffice = styled.div`
  background-color: gray;
  margin-right: 50%;
  padding: 20px;
  font-size: 40px;
  cursor: pointer;
  color: white;
`;
const Movies = styled.div`
  margin-top: 30px;
  font-size: 10px;
`;
const Movie = styled.div`
  background-color: black;
  padding: 10px;
  color: white;
`;

export default () => {
  let date = new Date();
  date = getDate(date);
  const { data, loading } = useQuery(BOX_WEEK, {
    variables: {
      date,
      week: "0"
    }
  });
  const [isShown, setIsShown] = useState(false);
  const onEnter = () => {
    setIsShown(true);
  };
  const onLeave = () => {
    setIsShown(false);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Home | MyMovie</title>
      </Helmet>
      {loading && <Loader />}
      <BoxOffice onMouseEnter={onEnter} onMouseLeave={onLeave}>
        주간 박스오피스
        <Movies>
          {isShown &&
            !loading &&
            data &&
            data.boxofficeWeek.map(movie => (
              <Movie key={movie.rnum}>{movie.movieNm}</Movie>
            ))}
        </Movies>
      </BoxOffice>
    </Wrapper>
  );
};
