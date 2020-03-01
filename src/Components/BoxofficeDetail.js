import React from "react";

export default ({ data }) => (
  <>
    <div>RANK {data.rank}</div>
    <div>누적매출액 {data.salesAcc}</div>
    <div>{data.rankOldAndNew}</div>
    <div>개봉일 {data.openDt}</div>
    <div>누적관객수 {data.audiAcc}</div>
  </>
);
