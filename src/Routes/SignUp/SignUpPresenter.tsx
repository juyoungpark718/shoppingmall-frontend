import React from "react";
import PropTypes from "prop-types";
import Input from "../../Components/Input";
import styled from "styled-components";

const Form = styled.form``;
const Button = styled.button``;

interface IProps {
  onChangeInput: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  onBlurIsValid: (
    event: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  gender: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  yearOfBirth: string;
  monthOfBirth: string;
  dayOfBirth: string;
}

const SignUpPresenter: React.FC<IProps> = ({
  email,
  password,
  confirmPassword,
  name,
  gender,
  phoneNumber,
  address,
  detailedAddress,
  yearOfBirth,
  monthOfBirth,
  dayOfBirth,
  onChangeInput,
  onSubmitForm,
  onBlurIsValid,
}) => {
  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <Input
          name={`email`}
          value={email}
          onChange={onChangeInput}
          onBlur={onBlurIsValid}
        />
        <Input
          type={`password`}
          name={`password`}
          value={password}
          onChange={onChangeInput}
        />
        <Input
          type={`password`}
          name={`confirmPassword`}
          value={confirmPassword}
          onChange={onChangeInput}
          onBlur={onBlurIsValid}
        />
        <Input name={`name`} value={name} onChange={onChangeInput} />
        <select name={`gender`} value={gender} onChange={onChangeInput}>
          <option value={`MALE`}>남자</option>
          <option value={`FEMALE`}>여자</option>
        </select>
        <Input
          name={`phoneNumber`}
          value={phoneNumber}
          onChange={onChangeInput}
          onBlur={onBlurIsValid}
        />
        <Input name={`address`} value={address} onChange={onChangeInput} />
        <Input
          name={`detailedAddress`}
          value={detailedAddress}
          onChange={onChangeInput}
        />
        <Input
          name={`yearOfBirth`}
          value={yearOfBirth}
          placeholder={`년도(4자리)`}
          onChange={onChangeInput}
          onBlur={onBlurIsValid}
        />
        <Input
          name={`monthOfBirth`}
          value={monthOfBirth}
          placeholder={`월`}
          onChange={onChangeInput}
          onBlur={onBlurIsValid}
        />
        <Input
          name={`dayOfBirth`}
          value={dayOfBirth}
          placeholder={`일`}
          onChange={onChangeInput}
          onBlur={onBlurIsValid}
        />
        <Button>회원가입</Button>
      </Form>
    </div>
  );
};

SignUpPresenter.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onBlurIsValid: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  detailedAddress: PropTypes.string.isRequired,
  yearOfBirth: PropTypes.string.isRequired,
  monthOfBirth: PropTypes.string.isRequired,
  dayOfBirth: PropTypes.string.isRequired,
};

export default SignUpPresenter;
