import { gql } from "apollo-boost";

export const GET_USER_PROFILE = gql`
  query getUserProfile {
    GetUserProfile {
      ok
      user {
        name
        email
        gender
        phoneNumber
        address
        detailedAddress
        dateOfBirth
      }
      error
    }
  }
`;
