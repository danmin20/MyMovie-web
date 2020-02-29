import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { BOX_WEEK } from "../queries";
import Helmet from "react-helmet";
import Loader from "../Components/Loader";
import { getDate } from "../getDate";

const Wrapper = styled.div`
  margin-top: 70px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxOffice = styled.div`
  background-color: gray;
  width: 100%;
  padding: 20px;
  font-size: 40px;
  font-weight: 100;
  color: white;
`;
const Movies = styled.div`
  margin-top: 30px;
  font-size: 13px;
`;
const Movie = styled.div`
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
      {!loading && (
        <BoxOffice onMouseEnter={onEnter} onMouseLeave={onLeave}>
          BOXOFFICE of This Week
          {isShown && (
            <>
              <Movies>
                {data &&
                  data.boxofficeWeek.map(movie => (
                    <>
                      <Movie
                        key={movie.rnum}
                        onMouseEnter={() => <Loader/>}
                      >
                        {movie.movieNm}
                      </Movie>
                    </>
                  ))}
              </Movies>
            </>
          )}
        </BoxOffice>
      )}
    </Wrapper>
  );
};
