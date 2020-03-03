import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import FadeIn from "react-fade-in";
import { toast } from "react-toastify";
import { ME, EDIT_ME } from "../queries";
import {
  Modal,
  ModalBody,
  Input,
  ModalFooter,
  Button,
  ModalHeader
} from "reactstrap";
import useInput from "../Hooks/useInput";
import { ClipLoader } from "react-spinners";
import { LOCAL_LOGOUT } from "../Routes/Auth/AuthQueries";

const Header = styled.header`
  width: 100%;
  height: 80px;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0px;
  display: flex;
  background-color: white;
  padding-top: 23px;
  border: 0px solid #adadad;
  border-bottom-width: 0.5px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Row = styled.div`
  width: 100%;
  margin: 0 50px;
  text-align: center;
`;

const Menu = styled.div`
  width: 100px;
  background-color: gray;
  border-radius: 30px;
  padding: 10px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

const Setting = styled(Menu)`
  cursor: pointer;
`;

const Sub = styled(Setting)`
  background-color: #adadad;
  margin-top: 20px;
`;

const Name = styled.div`
  font-size: 20px;
  margin-top: 7px;
  position: flex;
  text-align: center;
`;

const Page = styled.div`
  font-size: 10px;
  color: white;
`;

export default withRouter(({ location, me, isLoggedIn }) => {
  let name;
  if (isLoggedIn && me && me.me) {
    name = useInput(me.me.name);
  }
  const [isShown, setIsShown] = useState(false);
  const [Edit, setEdit] = useState(false);
  const [loading_edit, setLoading_edit] = useState(false);
  const [editMutation] = useMutation(EDIT_ME);
  const { refetch } = useQuery(ME);
  const [logoutMutation] = useMutation(LOCAL_LOGOUT);
  const onEnter = () => setIsShown(true);
  const onLeave = () => setIsShown(false);
  const toggleEdit = () => setEdit(!Edit);
  const signOut = async () => {
    logoutMutation();
  };
  const handleEdit = async () => {
    if (name.value === "") {
      toast.error("입력란을 채워주세요.");
    } else {
      try {
        setLoading_edit(true);
        const {
          data: { editMe }
        } = await editMutation({
          variables: {
            name: name.value
          }
        });
        await refetch();
        if (editMe.id) {
          setEdit(false);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading_edit(false);
      }
    }
  };
  return (
    <Header>
      <HeaderWrapper>
        <Row />
        <Row>
          <Link to="/">
            <Name>마이무비</Name>
          </Link>
        </Row>
        <Row>
          {isLoggedIn ? (
            location.pathname !== "/mypage" ? (
              <Link to="/mypage">
                <Menu>
                  <Page>My Page</Page>
                </Menu>
              </Link>
            ) : (
              <div
                style={{ width: 100 }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <Setting>
                  <Page>Setting</Page>
                </Setting>
                {isShown && (
                  <FadeIn>
                    <Sub onClick={toggleEdit}>
                      <Page>Edit Name</Page>
                    </Sub>
                    <Sub onClick={signOut} style={{ marginTop: 10 }}>
                      <Page>Sign Out</Page>
                    </Sub>
                  </FadeIn>
                )}
              </div>
            )
          ) : (
            <Link to="/auth">
              <Menu>
                <Page>Authorization</Page>
              </Menu>
            </Link>
          )}
        </Row>
      </HeaderWrapper>
      {isLoggedIn && me && me.me && (
        <Modal isOpen={Edit} toggle={toggleEdit}>
          <ModalHeader style={{ backgroundColor: "gray", color: "white" }}>
            이름 수정
          </ModalHeader>
          <ModalBody>
            <Input type="text" value={name.value} onChange={name.onChange} />{" "}
          </ModalBody>
          <ModalFooter>
            <Button style={{ fontSize: 12 }} onClick={handleEdit}>
              {loading_edit ? <ClipLoader size={12} color={"white"} /> : "EDIT"}
            </Button>
          </ModalFooter>
        </Modal>
      )}
    </Header>
  );
});
