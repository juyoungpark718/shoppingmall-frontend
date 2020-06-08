import React, { useState } from "react";
import SignUpPresenter from "./SignUpPresenter";
import { useMutation } from "react-apollo";
import { SIGN_UP } from "./SignUpQueries";
import { toast } from "react-toastify";
import { LOG_USER_IN } from "../../sharedQueries";

const SignUpContainer: React.FC = () => {
  const [singIn] = useMutation(LOG_USER_IN);
  const [signUp] = useMutation(SIGN_UP, {
    onCompleted({ EmailSignUp }) {
      if (EmailSignUp.ok) {
      } else {
        toast.error(EmailSignUp.error);
      }
    },
  });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
    gender: "MALE",
    phoneNumber: "",
    address: "",
    detailedAddress: "",
    dateOfBirth: new Date(),
  });
  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    console.log(name, value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(inputs);
  };

  const onChangeBirth = (
    _,
    event: React.SyntheticEvent<HTMLSelectElement, Event>
  ): void => {};

  return (
    <SignUpPresenter
      {...inputs}
      onChangeInput={(e) => onChangeInput(e)}
      onSubmitForm={(e) => onSubmitForm(e)}
      onChangeBirth={(_, e) => onChangeBirth(_, e)}
    />
  );
};

export default SignUpContainer;
