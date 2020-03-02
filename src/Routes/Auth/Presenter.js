import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";

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
  border-bottom-width: 1px;
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

const Link = styled.span`
  cursor: pointer;
`;

export default ({ action, name, email, setAction, onSubmit, secret }) => (
  <Wrapper>
    <Form>
      {action === "signin" && (
        <>
          <Helmet>
            <title>Sign in | MyMovie</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Blank placeholder={"EMAIL"} {...email} type="email" />
            <Button onClick={onSubmit}>Sign in</Button>
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
            <Button onClick={onSubmit}>Sign up</Button>
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
            <Button onClick={onSubmit}>Confirm</Button>
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
