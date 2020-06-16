import React, { useState } from "react";
import UserProfilePresenter from "./UserProfilePresenter";
import { useQuery, useMutation } from "react-apollo";
import { EDIT_USER_PROFILE } from "./UserProfileQueries.queries";
import {
  getUserProfile,
  editUserProfile,
  editUserProfileVariables,
} from "../../types/api";
import { toast } from "react-toastify";
import { LOG_USER_OUT } from "../../sharedQueries.locals";
import { GET_USER_PROFILE } from "../../sharedQueries.queries";

interface IStates {
  email: string;
  name: string;
  gender: string;
  phoneNumber: string;
  address: string;
  detailedAddress: string;
  dateOfBirth: string;
  isChangeAddress: boolean;
}

const UserProfileContainer: React.FC = () => {
  const [inputs, setInputs] = useState<IStates>({
    email: "",
    name: "",
    gender: "",
    phoneNumber: "",
    address: "",
    detailedAddress: "",
    dateOfBirth: "",
    isChangeAddress: false,
  });
  const [logout] = useMutation(LOG_USER_OUT);
  useQuery<getUserProfile>(GET_USER_PROFILE, {
    onCompleted: ({ GetUserProfile: { user } }) => {
      if (user) {
        setInputs({
          name: user.name,
          email: user.email,
          gender: user.gender,
          phoneNumber: user.phoneNumber,
          address: user.address,
          detailedAddress: user.detailedAddress || "",
          dateOfBirth: user.dateOfBirth,
          isChangeAddress: inputs.isChangeAddress,
        });
      }
    },
    onError: () => {
      logout();
    },
  });

  const [editProfile] = useMutation<editUserProfile, editUserProfileVariables>(
    EDIT_USER_PROFILE,
    {
      onCompleted: ({ EditUserProfile }) => {
        if (EditUserProfile.ok) {
          handleIsChangeAddress();
          toast.success("주소를 업데이트 했습니다.");
        } else {
          toast.error("주소 업데이트를 실패했습니다.");
        }
      },
    }
  );

  const handleIsChangeAddress = (): void => {
    if (inputs.isChangeAddress) {
      setInputs({
        ...inputs,
        isChangeAddress: false,
      });
    } else {
      setInputs({
        ...inputs,
        isChangeAddress: true,
      });
    }
  };

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmitAddress = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    await editProfile({
      variables: {
        address: inputs.address,
        detailedAddress: inputs.detailedAddress,
      },
    });
  };

  return (
    <UserProfilePresenter
      {...inputs}
      handleChangeInput={(e) => handleChangeInput(e)}
      handleIsChangeAddress={() => handleIsChangeAddress()}
      handleSubmitAddress={(e) => handleSubmitAddress(e)}
    />
  );
};

export default UserProfileContainer;
