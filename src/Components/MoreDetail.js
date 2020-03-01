import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import { Plus } from "./Icons";

const Button = styled.div`
  margin-left: 3px;
  margin-top: 3px;
`;
const Row = styled.div`
  padding: 10px;
  font-size: 20px;
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
            <Row>
              <Topic>누적관색수</Topic>
              <div>{data.audiAcc}명</div>
            </Row>
            <Row>
              <Topic>누적매출액</Topic>
              <div>{data.salesAcc}₩</div>
            </Row>
          </FadeIn>
        </div>
      )}
    </div>
  );
};
