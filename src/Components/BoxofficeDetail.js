import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import { useQuery } from "react-apollo-hooks";
import { MOVIE_DETAIL } from "../queries";

const Row = styled.div`
  padding: 10px;
`;
const Topic = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

export default ({ code }) => {
  const { loading, data } = useQuery(MOVIE_DETAIL, {
    variables: {
      code
    }
  });
  return (
    <>
      {!loading && data && data.movieDetail && (
        <FadeIn>
          <Row>
            <Topic>개봉일</Topic>
            <div>{data.movieDetail.prdtYear}</div>
          </Row>
          <Row>
            <Topic>상영시간</Topic>
            <div>{data.movieDetail.showTm}분</div>
          </Row>
          <Row>
            <Topic>제작상태</Topic>
            <div>{data.movieDetail.prdtStatNm}</div>
          </Row>
          <Row>
            <Topic>제작국가</Topic>
            {data.movieDetail.nations.map(nation => (
              <div>{nation.nationNm}</div>
            ))}
          </Row>
          <Row>
            <Topic>장르</Topic>
            {data.movieDetail.genres.map(genre => (
              <div>{genre.genreNm}</div>
            ))}
          </Row>
          <Row>
            <Topic>감독</Topic>
            {data.movieDetail.directors.map(director => (
              <div>
                {director.peopleNm} {director.peopleNmEn}
              </div>
            ))}
          </Row>
          <Row>
            <Topic>영화사</Topic>
            {data.movieDetail.companys.map(company => (
              <div>
                {company.companyNm} {company.companyPartNm}
              </div>
            ))}
          </Row>
          <Row>
            <Topic>배우</Topic>
            {data.movieDetail.actors.map(actor => (
              <div>
                {actor.peopleNm} {actor.peopleNmEn}
              </div>
            ))}
          </Row>
          <Row>
            <Topic>상영형태</Topic>
            {data.movieDetail.showTypes.map(type => (
              <div>
                {type.showTypeGroupNm} {type.showTypeNm}
              </div>
            ))}
          </Row>
          <Row>
            <Topic>관람등급</Topic>
            {data.movieDetail.audits.map(audit => (
              <div>{audit.watchGradeNm}</div>
            ))}
          </Row>
        </FadeIn>
      )}
    </>
  );
};
