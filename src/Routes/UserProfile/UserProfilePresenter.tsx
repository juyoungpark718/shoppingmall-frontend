import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../../Components/Input";

const Container = styled.div``;

const Column = styled.div``;

interface IProps {
  handleChangeInput: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleIsChangeAddress: () => void;
  handleSubmitAddress: (event: React.FormEvent) => void;
  email: string;
  name: string;
  gender: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: string;
  isChangeAddress: boolean;
}

const UserProfilePresenter: React.FC<IProps> = ({
  email,
  name,
  gender,
  phoneNumber,
  address,
  detailedAddress,
  dateOfBirth,
  isChangeAddress,
  handleChangeInput,
  handleIsChangeAddress,
  handleSubmitAddress,
}) => {
  return (
    <Container>
      <Column>{email}</Column>
      <Column>{name}</Column>
      <Column>{gender}</Column>
      <Column>{phoneNumber}</Column>

      {isChangeAddress ? (
        <Column>
          <form onSubmit={handleSubmitAddress}>
            <Input
              name={`address`}
              value={address}
              onChange={handleChangeInput}
            />
            <Input
              name={`detailedAddress`}
              value={detailedAddress}
              onChange={handleChangeInput}
            />
            <button>수정하기</button>
          </form>
          <button onClick={handleIsChangeAddress}>변경취소</button>
        </Column>
      ) : (
        <Column>
          {address}
          {detailedAddress}
          <button onClick={handleIsChangeAddress}>변경하기</button>
        </Column>
      )}

      <Column>{dateOfBirth}</Column>
    </Container>
  );
};

UserProfilePresenter.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  detailedAddress: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  isChangeAddress: PropTypes.bool.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
  handleIsChangeAddress: PropTypes.func.isRequired,
  handleSubmitAddress: PropTypes.func.isRequired,
};

export default UserProfilePresenter;
