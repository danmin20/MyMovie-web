import React, { useState } from "react";
import styled from "styled-components";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
  Input
} from "reactstrap";
import useInput from "../Hooks/useInput";
import { toast } from "react-toastify";
import FadeIn from "react-fade-in";
import { useMutation, useQuery } from "react-apollo-hooks";
import { EDIT_MOVIE, ME } from "../queries";
import { ClipLoader } from "react-spinners";

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
  const [edit, setEdit] = useState(false);
  const [loading_edit, setLoading_edit] = useState(false);
  const [loading_del, setLoading_del] = useState(false);
  const [editMutation] = useMutation(EDIT_MOVIE);
  const { refetch } = useQuery(ME);
  const sentiment = useInput(data.sentiment);
  const rate = useInput(data.rate);
  const toggle = () => setModal(!modal);
  const toggleEdit = () => setEdit(!edit);
  const onEnter = () => {
    setIsShown(true);
  };
  const onLeave = () => {
    setIsShown(false);
  };
  const handleEdit = async () => {
    const id = data.id;
    try {
      setLoading_edit(true);
      const {
        data: { editMovie }
      } = await editMutation({
        variables: {
          id,
          sentiment: sentiment.value,
          rate: rate.value,
          action: "EDIT"
        }
      });
      await refetch();
      if (editMovie.id) {
        setModal(false);
        setEdit(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading_edit(false);
    }
  };
  const handleDelete = async () => {
    const id = data.id;
    if (sentiment.value === "") {
      toast.error("내용을 입력해주세요.");
    } else {
      try {
        setLoading_del(true);
        const {
          data: { editMovie }
        } = await editMutation({
          variables: {
            id,
            action: "DELETE"
          }
        });
        await refetch();
        if (editMovie.id) {
          setModal(false);
          setEdit(false);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading_del(false);
      }
    }
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
        <ModalHeader style={{ backgroundColor: "gray", color: "white" }}>
          {data.movieNm}
        </ModalHeader>
        <ModalBody>
          <div>{data.sentiment}</div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={toggleEdit} style={{ width: 50, fontSize: 12 }}>
            EDIT
          </Button>
          <Button
            onClick={handleDelete}
            style={{ width: 50, fontSize: 12 }}
            color="danger"
          >
            {loading_del ? <ClipLoader size={12} color={"white"} /> : "DEL"}
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={edit} toggle={toggleEdit}>
        <ModalHeader style={{ backgroundColor: "gray", color: "white" }}>
          {data.movieNm}
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
          <Button color="danger" style={{ fontSize: 12 }} onClick={handleEdit}>
            {loading_edit ? <ClipLoader size={12} color={"white"} /> : "EDIT"}
          </Button>
        </ModalFooter>
      </Modal>
    </Constructor>
  );
};
