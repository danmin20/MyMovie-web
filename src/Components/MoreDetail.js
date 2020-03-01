import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import { Plus } from "./Icons";

const Button = styled.div`
  margin-left: 3px;
`;
const Rank = styled.div`
  color: black;
  margin-bottom: 10px;
  padding: 10px;
`;
const Row = styled.div`
  padding: 10px;
  font-size: 25px;
`;
const Topic = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

export default ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const onEnter = () => setIsShown(true);
  const onLeave = () => setIsShown(false);
  return (
    <div>
      <Button onMouseMove={onEnter} onMouseLeave={onLeave}>
        <Plus />
      </Button>
      {isShown && (
        <div style={{ marginLeft: 30 }}>
          <FadeIn>
            <Rank>RANK {data.rank}</Rank>
            <Row>
              <Topic>누적관색수</Topic>
              <div>{data.audiAcc} 명</div>
            </Row>
            <Row>
              <Topic>누적매출액</Topic>
              <div>{data.salesAcc} ₩</div>
            </Row>
            <Row>
              <Topic>상영기간</Topic>
              <div>{data.showRange}</div>
            </Row>
          </FadeIn>
        </div>
      )}
    </div>
  );
};
