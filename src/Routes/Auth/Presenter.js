import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Blank = styled(Input)`
  font-size: 15px;
  border: 0px solid white;
  border-bottom-width: 0.5px;
  padding: 10px;
  width: 100%;
  color: white;
  background-color: transparent;
  ::placeholder {
    color: white;
  }
  margin-bottom: 10px;
`;

const Button = styled.div`
  margin-top: 10px;
  text-align: center;
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

const Form = styled.div`
  border-radius: 10px;
  background-color: gray;
  width: 100%;
  max-width: 350px;
  padding: 30px;
  margin-bottom: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Link = styled.div`
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

export default ({
  loading,
  action,
  name,
  email,
  setAction,
  onSubmit,
  secret
}) => (
  <Wrapper>
    <Form>
      {action === "signin" && (
        <>
          <Helmet>
            <title>Sign in | MyMovie</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Blank placeholder={"EMAIL"} {...email} type="email" />
            {!loading ? (
              <Button onClick={onSubmit}>Sign in</Button>
            ) : (
              <Button style={{ cursor: "default" }}>
                <ClipLoader size={12} color={"white"} />
              </Button>
            )}
          </form>
        </>
      )}
      {action === "signup" && (
        <>
          <Helmet>
            <title>Sign up | MyMovie</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Blank placeholder={"NAME"} {...name} />
            <Blank placeholder={"EMAIL"} {...email} type="email" />
            {!loading ? (
              <Button onClick={onSubmit}>Sign up</Button>
            ) : (
              <Button style={{ cursor: "default" }}>
                <ClipLoader size={12} color={"white"} />
              </Button>
            )}
          </form>
        </>
      )}
      {action === "confirm" && (
        <>
          <Helmet>
            <title>Confirm | MyMovie</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Blank placeholder={"SECRET KEY"} {...secret} />
            {!loading ? (
              <Button onClick={onSubmit}>Confirm</Button>
            ) : (
              <Button style={{ cursor: "default" }}>
                <ClipLoader size={12} color={"white"} />
              </Button>
            )}{" "}
          </form>
        </>
      )}
    </Form>
    {action !== "confirm" && (
      <div>
        {action === "signin" ? (
          <Link onClick={() => setAction("signup")}>
            아직 계정이 없으신가요?
          </Link>
        ) : (
          <Link onClick={() => setAction("signin")}>계정이 있으신가요?</Link>
        )}
      </div>
    )}
  </Wrapper>
);
