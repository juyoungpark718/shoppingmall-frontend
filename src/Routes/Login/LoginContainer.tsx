import React, { useState } from "react";
import LoginPresenter from "./LoginPresenter";
import { isEmail } from "../../util/isValid";
import { toast } from "react-toastify";

const submitForm = (
  event: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string
): void => {
  event.preventDefault();
  if (isEmail(email)) {
  } else {
    toast.error("Not valid Email!!");
  }
};

const LoginFormContainer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginPresenter
      email={email}
      setEmail={(e) => setEmail(e.target.value)}
      password={password}
      setPassword={(e) => setPassword(e.target.value)}
      submitForm={(e) => submitForm(e, email, password)}
    />
  );
};

export default LoginFormContainer;
