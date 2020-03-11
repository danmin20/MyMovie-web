import React from "react";
import styled from "styled-components";
import MoreDetail from "./MoreDetail";

const Movie = styled.div`
  padding: 10px;
  padding-left: 50px;
`;
const Pointed = styled.div`
  display: flex;
  flex-direction: row;
`;
const Big = styled.div`
  font-size: 30px;
`;
const Small = styled.div`
  font-size: 15px;
  color: #adadad;
`;

export default ({ data, shown, setShown }) => {
  const enter = () => setShown(true);
  const leave = () => setShown(false);
  return (
    <Movie onMouseEnter={enter} onMouseLeave={leave}>
      {shown ? (
        <Pointed>
          <Big>{data.movieNm}</Big>
          <div style={{ cursor: "pointer" }}>
            <MoreDetail data={data} />
          </div>
        </Pointed>
      ) : (
        <Small>{data.movieNm}</Small>
      )}
    </Movie>
  );
};
