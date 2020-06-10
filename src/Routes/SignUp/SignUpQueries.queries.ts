import { gql } from "apollo-boost";
export const SIGN_UP = gql`
  mutation signUp(
    $email: String!
    $password: String!
    $name: String!
    $gender: String!
    $phoneNumber: String!
    $address: String!
    $detailedAddress: String!
    $dateOfBirth: String!
  ) {
    EmailSignUp(
      email: $email
      password: $password
      name: $name
      gender: $gender
      phoneNumber: $phoneNumber
      address: $address
      detailedAddress: $detailedAddress
      dateOfBirth: $dateOfBirth
    ) {
      ok
      error
      token
    }
  }
`;
