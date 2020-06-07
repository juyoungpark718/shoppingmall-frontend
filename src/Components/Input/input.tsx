import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.greyColor};
  font-size: 1.2rem;
  width: 100%;
  padding-bottom: 0.5rem;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.greyColor};
    font-weight: 300;
  }
`;

interface IProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  name?: string;
  onChange: any;
  className?: string;
}

const Input: React.FC<IProps> = ({
  className,
  type = "text",
  name = "",
  onChange,
  value,
  required = true,
  placeholder = "",
}) => (
  <Container
    className={className}
    type={type}
    name={name}
    onChange={onChange}
    value={value}
    required={required}
    placeholder={placeholder}
  />
);

export default Input;
