import React, { useState } from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Input,
  Button,
  ModalFooter
} from "reactstrap";
import { toast } from "react-toastify";
import useInput from "../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { UPLOAD, ME } from "../queries";
import { withRouter } from "react-router-dom";
import { ClipLoader } from "react-spinners";

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

export default withRouter(({ data, isLoggedIn, history }) => {
  const [isShown, setIsShown] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { refetch } = useQuery(ME);
  const [uploadMutation] = useMutation(UPLOAD);
  const sentiment = useInput("");
  const rate = useInput("1");
  const onEnter = () => {
    setIsShown(true);
  };
  const onLeave = () => {
    setIsShown(false);
  };
  const toggle = () => setModal(!modal);
  const handleUpload = async () => {
    const movieNm = data.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "");
    const img = data.image;
    if (sentiment.value === "") {
      toast.error("내용을 입력해주세요.");
    } else {
      try {
        setLoading(true);
        const {
          data: { upload }
        } = await uploadMutation({
          variables: {
            movieNm,
            sentiment: sentiment.value,
            rate: rate.value,
            img
          }
        });
        if (upload.id) {
          await refetch();
          history.push("/mypage");
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };
  if (modal && !isLoggedIn) {
    setModal(false);
    toast.error("글을 작성하려면 로그인이 필요합니다.");
  }
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
      <Modal isOpen={isLoggedIn && modal} toggle={toggle}>
        <ModalHeader style={{ backgroundColor: "gray", color: "white" }}>
          {data.title.replace(/<b>/gi, "").replace(/<\/b>/gi, "")}
        </ModalHeader>
        <ModalBody>
          <div style={{ fontSize: 12, marginTop: 10, marginBottom: 10 }}>
            감상평
          </div>
          <Input
            type="textarea"
            placeholder="글을 작성해주세요."
            value={sentiment.value}
            onChange={sentiment.onChange}
            height={100}
          />
          <div style={{ fontSize: 12, marginTop: 30, marginBottom: 10 }}>
            평점
          </div>
          <Input
            style={{ marginBottom: 30 }}
            type="select"
            value={rate.value}
            onChange={rate.onChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </ModalBody>
        <ModalFooter>
          <Button style={{ fontSize: 12 }} onClick={handleUpload}>
            {loading ? <ClipLoader size={12} color={"white"} /> : "SUBMIT"}
          </Button>
        </ModalFooter>
      </Modal>
    </Constructor>
  );
});
