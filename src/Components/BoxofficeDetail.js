import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import { useQuery } from "react-apollo-hooks";
import { MOVIE_DETAIL } from "../queries";
import Loader from "./Loader";

const Row = styled.div`
  padding: 10px;
`;
const Rank = styled.div`
  color: black;
  margin-bottom: 10px;
  padding: 10px;
`;
const Topic = styled.div`
  font-size: 12px;
  color: #adadad;
  margin-bottom: 5px;
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
`;
const En = styled.span`
  font-size: 12px;
`;
const Sub = styled.span`
  font-size: 15px;
`;

export default ({ rank, code }) => {
  const { loading, data } = useQuery(MOVIE_DETAIL, {
    variables: {
      code,
    },
  });
  return (
    <>
      {loading && <Loader />}
      {!loading && data && data.movieDetail && (
        <FadeIn>
          <Rank>_RANK {rank}</Rank>
          <First>
            <Row>
              <Topic>개봉일</Topic>
              <div>{data.movieDetail.prdtYear}</div>
            </Row>
            <Row>
              <Topic>상영시간</Topic>
              <div>{data.movieDetail.showTm}분</div>
            </Row>
            <Row>
              <Topic>제작국가</Topic>
              {data.movieDetail.nations.map((nation, idx) => (
                <div key={idx}>{nation.nationNm}</div>
              ))}
            </Row>
          </First>
          <Row>
            <Topic>장르</Topic>
            {data.movieDetail.genres.map((genre, idx) => (
              <span key={idx}>{genre.genreNm} </span>
            ))}
          </Row>
          <Row>
            <Topic>관람등급</Topic>
            {data.movieDetail.audits.map((audit, idx) => (
              <div key={idx}>{audit.watchGradeNm}</div>
            ))}
          </Row>
          <Row>
            <Topic>감독</Topic>
            {data.movieDetail.directors.map((director, idx) => (
              <div key={idx}>
                {director.peopleNm} <En>{director.peopleNmEn}</En>
              </div>
            ))}
          </Row>
          <Row>
            <Topic>배우</Topic>
            {data.movieDetail.actors.map((actor, idx) => (
              <div key={idx}>
                {actor.cast && <Sub>{actor.cast}역 </Sub>}
                {actor.peopleNm} <En>{actor.peopleNmEn}</En>
              </div>
            ))}
          </Row>
          <Row>
            <Topic>상영형태</Topic>
            {data.movieDetail.showTypes.map((type, idx) => (
              <div key={idx}>
                {type.showTypeGroupNm} {type.showTypeNm}
              </div>
            ))}
          </Row>
          <Row>
            <Topic>영화사</Topic>
            {data.movieDetail.companys.map((company, idx) => (
              <div key={idx}>
                {company.companyNm} <Sub>{company.companyPartNm}</Sub>
              </div>
            ))}
          </Row>
        </FadeIn>
      )}
    </>
  );
};
