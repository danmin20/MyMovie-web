import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 150px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  height: 180px;
  width: 120px;
  position: relative;
`;

const Title = styled.div`
  margin-top: 15px;
`;

export default ({ data }) => (
  <Box>
    <Card background={data.image} />
    <Title>{data.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</Title>
  </Box>
);
