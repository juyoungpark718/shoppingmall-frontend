/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSignIn
// ====================================================

export interface emailSignIn_EmailSignIn {
  __typename: "EmailSignInResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface emailSignIn {
  EmailSignIn: emailSignIn_EmailSignIn;
}

export interface emailSignInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_EmailSignUp {
  __typename: "EmailSignUpResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface signUp {
  EmailSignUp: signUp_EmailSignUp;
}

export interface signUpVariables {
  email: string;
  password: string;
  name: string;
  gender: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserProfile
// ====================================================

export interface getUserProfile_GetUserProfile_user {
  __typename: "User";
  name: string;
  email: string;
  gender: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: string;
}

export interface getUserProfile_GetUserProfile {
  __typename: "GetUserProfileResponse";
  ok: boolean;
  user: getUserProfile_GetUserProfile_user | null;
  error: string | null;
}

export interface getUserProfile {
  GetUserProfile: getUserProfile_GetUserProfile;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editUserProfile
// ====================================================

export interface editUserProfile_EditUserProfile {
  __typename: "EditUserProfileResponse";
  ok: boolean;
  error: string | null;
}

export interface editUserProfile {
  EditUserProfile: editUserProfile_EditUserProfile;
}

export interface editUserProfileVariables {
  address: string;
  detailedAddress: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
