import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import SignUpPresenter from "./SignUpPresenter";
import { useMutation } from "react-apollo";
import { SIGN_UP } from "./SignUpQueries.queries";
import { toast } from "react-toastify";
import { LOG_USER_IN } from "../../sharedQueries";
import {
  isValidForm,
  validType,
  isYear,
  isMonth,
  isDay,
} from "../../util/isValid";
import { signUp, signUpVariables } from "../../types/api";

interface IProps extends RouteComponentProps {}

const SignUpContainer: React.FC<IProps> = ({ history }) => {
  const [singIn] = useMutation(LOG_USER_IN);
  const [signUp] = useMutation<signUp, signUpVariables>(SIGN_UP, {
    onCompleted({ EmailSignUp }) {
      if (EmailSignUp.ok) {
        history.push({
          pathname: `/`,
        });
        singIn({ variables: { token: EmailSignUp.token } });
      } else {
        toast.error(EmailSignUp.error);
      }
    },
  });

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: "MALE",
    phoneNumber: "",
    address: "",
    detailedAddress: "",
    yearOfBirth: "",
    monthOfBirth: "",
    dayOfBirth: "",
  });
  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const date = `${inputs.yearOfBirth}-${inputs.monthOfBirth}-${inputs.dayOfBirth}`;
    if (!isValidForm(validType.DATE, date)) {
      toast.error("생년월일을 다시 확인해주세요.");
    } else {
      signUp({ variables: { ...inputs, dateOfBirth: date } });
    }
  };

  const onBlurIsValid = (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name } = event.target;
    if (!isYear(inputs.yearOfBirth) && name === "yearOfBirth") {
      toast.error("Not valid year");
      setInputs({ ...inputs, [name]: "" });
    } else if (!isMonth(inputs.monthOfBirth) && name === "monthOfBirth") {
      toast.error("Not valid month");
      setInputs({ ...inputs, [name]: "" });
    } else if (!isDay(inputs.dayOfBirth) && name === "dayOfBirth") {
      toast.error("Not valid day");
    } else if (
      !isValidForm(validType.EMAIL, inputs.email) &&
      name === "email"
    ) {
      toast.error("Not valid email");
      setInputs({ ...inputs, [name]: "" });
    } else if (
      !isValidForm(validType.PHONE, inputs.phoneNumber) &&
      name === "phoneNumber"
    ) {
      toast.error("Not valid phone");
      setInputs({ ...inputs, [name]: "" });
    } else if (inputs.password !== inputs.confirmPassword) {
      toast.error("password and password confirm are different!");
      setInputs({
        ...inputs,
        password: "",
        [name]: "",
      });
    }
  };

  return (
    <SignUpPresenter
      {...inputs}
      onChangeInput={(e) => onChangeInput(e)}
      onSubmitForm={(e) => onSubmitForm(e)}
      onBlurIsValid={(e) => onBlurIsValid(e)}
    />
  );
};

export default SignUpContainer;
