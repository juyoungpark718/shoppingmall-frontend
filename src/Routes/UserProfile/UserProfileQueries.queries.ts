import { gql } from "apollo-boost";

export const EDIT_USER_PROFILE = gql`
  mutation editUserProfile($address: String!, $detailedAddress: String!) {
    EditUserProfile(address: $address, detailedAddress: $detailedAddress) {
      ok
      error
    }
  }
`;
