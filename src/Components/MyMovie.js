import React, { useState } from "react";
import styled from "styled-components";
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
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default ({ data }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const handleUpload = async () => {
  //   if(sentimentInput===""){
  //     toast.error("내용을 입력해주세요")
  //   }else{

  //   }
  // }
  return (
    <Constructor>
      <Box onClick={toggle}>
        <NoImg background={require("../noImage.png")} />
        <Card background={data.img} />
        <Title>
          {data.movieNm.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
        </Title>
        <div>{data.rate}</div>
      </Box>
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
