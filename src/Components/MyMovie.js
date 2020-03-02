import React, { useState } from "react";
import styled from "styled-components";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import useInput from "../Hooks/useInput";
import { toast } from "react-toastify";
import FadeIn from "react-fade-in";

const Constructor = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Info = styled.div`
  font-size: 15px;
  text-align: center;
  padding-bottom: 10px;
  border: 0px solid #adadad;
  border-bottom-width: 0.5px;
`;

const Box = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  :hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
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

const NoImg = styled.div`
  border-radius: 15px;
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  height: 180px;
  width: 120px;
  position: absolute;
`;

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
`;

export default ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const onEnter = () => {
    setIsShown(true);
  };
  const onLeave = () => {
    setIsShown(false);
  };
  return (
    <Constructor>
      <Box onClick={toggle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <NoImg background={require("../noImage.png")} />
        <Card background={data.img} />
      </Box>
      {isShown && (
        <Info>
          <FadeIn>
            <Title>
              {data.movieNm.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
            </Title>
            <div>
              {data.rate === "1" && "★☆☆☆☆"}
              {data.rate === "2" && "★★☆☆☆"}
              {data.rate === "3" && "★★★☆☆"}
              {data.rate === "4" && "★★★★☆"}
              {data.rate === "5" && "★★★★★"}
            </div>
          </FadeIn>
        </Info>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{data.movieNm}</ModalHeader>
        <ModalBody>
          <div>{data.rate}</div>
          <div>{data.sentiment}</div>
        </ModalBody>
      </Modal>
    </Constructor>
  );
};
