import { gql } from "apollo-boost";

export const BOX_WEEK = gql`
  query boxofficeWeek($date: String!, $week: String) {
    boxofficeWeek(date: $date, week: $week) {
      rnum
      rank
      rankIntent
      rankOldAndNew
      movieCd
      movieNm
      openDt
      salesAmt
      salesShare
      salesIntent
      salesChange
      salesAcc
      audiCnt
      audiIntent
      audiChange
      audiAcc
      scrnCnt
      showCnt
    }
  }
`;

export const MOVIE_DETAIL = gql`
  query movieDetail($code: String!) {
    movieDetail(code: $code) {
      movieCd
      movieNm
      movieNmEn
      movieNmOg
      prdtYear
      openDt
      showTm
      typeNm
      prdtStatNm
      nations {
        nationNm
      }
      genres {
        genreNm
      }
      directors {
        peopleNm
        peopleNmEn
      }
      companys {
        companyCd
        companyNm
        companyNmEn
        companyPartNm
      }
      actors {
        peopleNm
        cast
        peopleNmEn
      }
      showTypes {
        showTypeGroupNm
        showTypeNm
      }
      audits {
        auditNo
        watchGradeNm
      }
    }
  }
`;

export const SEARCH_MOVIE = gql`
  query naverMovie($term: String!, $start: Int!) {
    naverMovie(term: $term, start: $start) {
      title
      actor
      director
      userRating
      image
    }
  }
`;
