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

export const ME = gql`
  {
    me {
      name
      movies {
        id
        movieNm
        sentiment
        img
        rate
      }
    }
  }
`;

export const UPLOAD = gql`
  mutation upload(
    $sentiment: String!
    $movieNm: String!
    $img: String!
    $rate: String!
  ) {
    upload(sentiment: $sentiment, movieNm: $movieNm, img: $img, rate: $rate) {
      id
    }
  }
`;

export const EDIT_MOVIE = gql`
  mutation editMovie(
    $id: String!
    $sentiment: String
    $rate: String
    $action: ACTION!
  ) {
    editMovie(id: $id, sentiment: $sentiment, rate: $rate, action: $action) {
      id
    }
  }
`;
