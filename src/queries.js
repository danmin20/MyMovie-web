import { gql } from "apollo-boost";

export const BOX_WEEK = gql`
  query boxofficeWeek($date: String!, $week: String) {
    boxofficeWeek(date: $date, week: $week) {
      boxofficeType
      showRange
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
