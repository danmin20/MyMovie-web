import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { BOX_WEEK } from "../queries";
import Helmet from "react-helmet";
import Loader from "../Components/Loader";
import { getDate } from "../getDate";
import BoxofficeDetail from "../Components/BoxofficeDetail";
import FadeIn from "react-fade-in";
import Input from "../Components/Input";
import useInput from "../Hooks/useInput";
import { withRouter } from "react-router-dom";
import MovieList from "../Components/MovieList";

const Wrapper = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxOffice = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  font-size: 40px;
  font-weight: 100;
  color: black;
  :hover {
    background-color: gray;
    color: white;
    transition: 0.5s;
  }
`;
const Main = styled.div`
  margin-left: 50px;
`;
const Field = styled.div`
  padding: 30px;
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  flex: 1;
`;
const Movies = styled.div`
  font-size: 13px;
  flex: 0.6;
  padding-left: 30px;
`;
const Detailed = styled.div`
  flex: 0.4;
  font-size: 20px;
  padding-right: 30px;
`;

const SearchInput = styled(Input)`
  border: 0;
  width: 300px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 50px 0;
  text-align: center;
  &::placeholder {
    color: #adadad;
  }
`;

export default withRouter(({ history }) => {
  const date = new Date();
  const yesterday = getDate(date);
  const { data, loading } = useQuery(BOX_WEEK, {
    variables: {
      date: yesterday,
      week: "0",
    },
  });
  const [isShown, setIsShown] = useState(false);
  const [shown_0, setShown_0] = useState(false);
  const [shown_1, setShown_1] = useState(false);
  const [shown_2, setShown_2] = useState(false);
  const [shown_3, setShown_3] = useState(false);
  const [shown_4, setShown_4] = useState(false);
  const [shown_5, setShown_5] = useState(false);
  const [shown_6, setShown_6] = useState(false);
  const [shown_7, setShown_7] = useState(false);
  const [shown_8, setShown_8] = useState(false);
  const [shown_9, setShown_9] = useState(false);
  const onEnter = () => {
    setIsShown(true);
  };
  const onLeave = () => {
    setIsShown(false);
  };
  const search = useInput("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push("/search?term=" + encodeURIComponent(search.value));
  };
  return (
    <Wrapper>
      <Helmet>
        <title>Home | MyMovie</title>
      </Helmet>
      <form onSubmit={onSearchSubmit}>
        <SearchInput
          value={search.value}
          onChange={search.onChange}
          placeholder="SEARCH"
        />
      </form>
      {loading && <Loader />}
      {!loading && (
        <BoxOffice onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Main>
            BOXOFFICE <span style={{ fontSize: 25 }}>of This Week</span>
          </Main>
          {data !== {} ? (
            isShown && (
              <Field>
                <Movies>
                  <FadeIn>
                    <MovieList
                      data={data.boxofficeWeek[0]}
                      shown={shown_0}
                      setShown={setShown_0}
                    />
                    <MovieList
                      data={data.boxofficeWeek[1]}
                      shown={shown_1}
                      setShown={setShown_1}
                    />
                    <MovieList
                      data={data.boxofficeWeek[2]}
                      shown={shown_2}
                      setShown={setShown_2}
                    />
                    <MovieList
                      data={data.boxofficeWeek[3]}
                      shown={shown_3}
                      setShown={setShown_3}
                    />
                    <MovieList
                      data={data.boxofficeWeek[4]}
                      shown={shown_4}
                      setShown={setShown_4}
                    />
                    <MovieList
                      data={data.boxofficeWeek[5]}
                      shown={shown_5}
                      setShown={setShown_5}
                    />
                    <MovieList
                      data={data.boxofficeWeek[6]}
                      shown={shown_6}
                      setShown={setShown_6}
                    />
                    <MovieList
                      data={data.boxofficeWeek[7]}
                      shown={shown_7}
                      setShown={setShown_7}
                    />
                    <MovieList
                      data={data.boxofficeWeek[8]}
                      shown={shown_8}
                      setShown={setShown_8}
                    />
                    <MovieList
                      data={data.boxofficeWeek[9]}
                      shown={shown_9}
                      setShown={setShown_9}
                    />
                  </FadeIn>
                </Movies>
                <Detailed>
                  {shown_0 && (
                    <BoxofficeDetail
                      key={0}
                      rank={data.boxofficeWeek[0].rank}
                      code={data.boxofficeWeek[0].movieCd}
                    />
                  )}
                  {shown_1 && (
                    <BoxofficeDetail
                      key={1}
                      rank={data.boxofficeWeek[1].rank}
                      code={data.boxofficeWeek[1].movieCd}
                    />
                  )}
                  {shown_2 && (
                    <BoxofficeDetail
                      key={2}
                      rank={data.boxofficeWeek[2].rank}
                      code={data.boxofficeWeek[2].movieCd}
                    />
                  )}
                  {shown_3 && (
                    <BoxofficeDetail
                      key={3}
                      rank={data.boxofficeWeek[3].rank}
                      code={data.boxofficeWeek[3].movieCd}
                    />
                  )}
                  {shown_4 && (
                    <BoxofficeDetail
                      key={4}
                      rank={data.boxofficeWeek[4].rank}
                      code={data.boxofficeWeek[4].movieCd}
                    />
                  )}
                  {shown_5 && (
                    <BoxofficeDetail
                      key={5}
                      rank={data.boxofficeWeek[5].rank}
                      code={data.boxofficeWeek[5].movieCd}
                    />
                  )}
                  {shown_6 && (
                    <BoxofficeDetail
                      key={6}
                      rank={data.boxofficeWeek[6].rank}
                      code={data.boxofficeWeek[6].movieCd}
                    />
                  )}
                  {shown_7 && (
                    <BoxofficeDetail
                      key={7}
                      rank={data.boxofficeWeek[7].rank}
                      code={data.boxofficeWeek[7].movieCd}
                    />
                  )}
                  {shown_8 && (
                    <BoxofficeDetail
                      key={8}
                      rank={data.boxofficeWeek[8].rank}
                      code={data.boxofficeWeek[8].movieCd}
                    />
                  )}
                  {shown_9 && (
                    <BoxofficeDetail
                      key={9}
                      rank={data.boxofficeWeek[9].rank}
                      code={data.boxofficeWeek[9].movieCd}
                    />
                  )}
                </Detailed>
              </Field>
            )
          ) : (
            <>아직 박스오피스 데이터가 갱신되지 않았습니다.</>
          )}
        </BoxOffice>
      )}
    </Wrapper>
  );
});
