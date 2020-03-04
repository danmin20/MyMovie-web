import React, { useState } from "react";
import Presenter from "./Presenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { SIGNIN, SIGNUP, CONFIRM, LOCAL_LOGIN } from "./AuthQueries";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

export default withRouter(({ history }) => {
  const [action, setAction] = useState("signin");
  const [loading, setLoading] = useState(false);
  const name = useInput("");
  const email = useInput("");
  const secret = useInput("");
  const [signinMutation] = useMutation(SIGNIN, {
    variables: { email: email.value }
  });
  const [signupMutation] = useMutation(SIGNUP, {
    variables: {
      email: email.value,
      name: name.value
    }
  });
  const [confirmMutation] = useMutation(CONFIRM, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  });
  const [localLoginMutation] = useMutation(LOCAL_LOGIN);

  const onSubmit = async e => {
    e.preventDefault();
    if (action === "signin") {
      if (email.value !== "") {
        try {
          setLoading(true);
          const {
            data: { requestSecret }
          } = await signinMutation();
          if (!requestSecret) {
            toast.error("존재하지 않는 계정입니다. 회원가입해주세요.");
            setTimeout(() => setAction("signup"), 3000);
          } else {
            toast.success("메일함을 확인해주세요.");
            setAction("confirm");
          }
        } catch (e) {
          console.log(e);
          toast.error("오류발생. 재시도하십시오.");
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("이메일을 입력해주세요.");
      }
    } else if (action === "signup") {
      if (email.value !== "" && name.value !== "") {
        try {
          setLoading(true);
          const {
            data: { createAccount }
          } = await signupMutation();
          if (!createAccount) {
            toast.error("이미 존재하는 계정입니다.");
          } else {
            toast.success("회원가입이 완료되었습니다. 로그인해주세요.");
            setTimeout(() => setAction("signin"), 3000);
          }
        } catch (e) {
          console.log(e);
          toast.error("이미 존재하는 계정입니다.");
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("입력란을 모두 채워주세요.");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          setLoading(true);
          const {
            data: { confirmSecret: token }
          } = await confirmMutation();
          if (token !== "" && token !== undefined) {
            localLoginMutation({ variables: { token } });
            history.push("/");
          } else {
            throw Error();
          }
        } catch {
          toast.error("오류발생. 재시도하십시오.");
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <Presenter
      loading={loading}
      setAction={setAction}
      action={action}
      name={name}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
});
