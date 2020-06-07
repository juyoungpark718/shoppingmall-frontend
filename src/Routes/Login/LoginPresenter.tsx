import React from "react";
import PropTypes from "prop-types";
import Input from "../../Components/Input";
import styled from "styled-components";

const Form = styled.form``;

const Button = styled.button``;

interface IProps {
  email: string;
  setEmail: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  password: string;
  setPassword: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginFormPresenter: React.FC<IProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  submitForm,
}) => {
  return (
    <div>
      로그인 폼입니다.
      <Form onSubmit={submitForm}>
        <Input value={email} onChange={setEmail} />
        <Input type={`password`} value={password} onChange={setPassword} />
        <Button>로그인</Button>
      </Form>
    </div>
  );
};

LoginFormPresenter.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default LoginFormPresenter;
