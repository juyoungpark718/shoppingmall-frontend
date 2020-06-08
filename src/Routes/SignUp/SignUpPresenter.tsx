import React from "react";
import PropTypes from "prop-types";
import Input from "../../Components/Input";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = styled.form``;
const Button = styled.button``;

interface IProps {
  onChangeInput: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeBirth: (
    _,
    event: React.SyntheticEvent<HTMLSelectElement, Event>
  ) => void;
  email: string;
  password: string;
  name: string;
  gender: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: Date;
}

const SignUpPresenter: React.FC<IProps> = ({
  email,
  password,
  name,
  gender,
  phoneNumber,
  address,
  detailedAddress,
  dateOfBirth,
  onChangeInput,
  onSubmitForm,
  onChangeBirth,
}) => {
  return (
    <div>
      <Form onSubmit={onSubmitForm}>
        <Input name={`email`} value={email} onChange={onChangeInput} />
        <Input
          type={`password`}
          name={`password`}
          value={password}
          onChange={onChangeInput}
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
        />
        <Input name={`address`} value={address} onChange={onChangeInput} />
        <Input
          name={`detailedAddress`}
          value={detailedAddress}
          onChange={onChangeInput}
        />
        <DatePicker selected={dateOfBirth} onChange={onChangeBirth} />
        <Button>회원가입</Button>
      </Form>
    </div>
  );
};

SignUpPresenter.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onChangeBirth: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  detailedAddress: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.instanceOf(Date).isRequired,
};

export default SignUpPresenter;
