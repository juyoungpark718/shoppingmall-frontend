import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import LoginPresenter from "./LoginPresenter";
import { isEmail } from "../../util/isValid";
import { toast } from "react-toastify";
import { SIGN_IN } from "./LoginQueries";
import { LOG_USER_IN } from "../../sharedQueries";

interface IProps extends RouteComponentProps {}

const LoginFormContainer: React.FC<IProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logUserIn] = useMutation(LOG_USER_IN);
  const [emailSignIn] = useMutation(SIGN_IN, {
    onCompleted({ EmailSignIn }) {
      if (EmailSignIn.ok) {
        history.push({
          pathname: `/`,
        });
        logUserIn({
          variables: {
            token: EmailSignIn.token,
          },
        });
      } else {
        toast.error(EmailSignIn.error);
        setPassword("");
      }
    },
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (isEmail(email)) {
      emailSignIn({ variables: { email, password } });
      setPassword("");
    } else {
      toast.error("Not valid Email!!");
    }
  };

  return (
    <LoginPresenter
      email={email}
      setEmail={(e) => setEmail(e.target.value)}
      password={password}
      setPassword={(e) => setPassword(e.target.value)}
      submitForm={(e) => submitForm(e)}
    />
  );
};

export default LoginFormContainer;
