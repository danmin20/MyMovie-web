import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import useInput from "../Hooks/useInput";
import { toast } from "react-toastify";

const Constructor = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Box = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Info = styled.div`
  font-size: 15px;
  text-align: center;
  padding-bottom: 10px;
  border: 0px solid #adadad;
  border-bottom-width: 0.5px;
`;

const Topic = styled.div`
  font-size: 12px;
  color: #adadad;
`;

const Detail = styled.div`
  margin-top: 3px;
  margin-bottom: 10px;
  color: #636363;
`;

export default ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  const [modal, setModal] = useState(false);
  const sentimentInput = useInput("");
  const onEnter = () => {
    setIsShown(true);
  };
  const onLeave = () => {
    setIsShown(false);
  };
  const toggle = () => setModal(!modal);
  // const handleUpload = async () => {
  //   if(sentimentInput===""){
  //     toast.error("내용을 입력해주세요")
  //   }else{

  //   }
  // }
  return (
    <Constructor>
      <Box onClick={toggle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <NoImg background={require("../noImage.png")} />
        <Card background={data.image} />
        <Title>{data.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}</Title>
      </Box>
      {isShown && (
        <Info>
          <FadeIn>
            <Topic>배우</Topic>
            <Detail>{data.actor}</Detail>
            <Topic>감독</Topic>
            <Detail>{data.director}</Detail>
            <Topic>관객평점</Topic>
            <Detail>{data.userRating}</Detail>
          </FadeIn>
        </Info>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>title</ModalHeader>
        <ModalBody>hi</ModalBody>
      </Modal>
    </Constructor>
  );
};
