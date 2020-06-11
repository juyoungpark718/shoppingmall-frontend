import React, { useState } from "react";
import UserProfilePresenter from "./UserProfilePresenter";
import { useQuery, useMutation } from "react-apollo";
import {
  GET_USER_PROFILE,
  EDIT_USER_PROFILE,
} from "./UserProfileQueries.queries";
import {
  getUserProfile,
  editUserProfile,
  editUserProfileVariables,
} from "../../types/api";
import { toast } from "react-toastify";

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

  useQuery<getUserProfile>(GET_USER_PROFILE, {
    onCompleted: ({ GetUserProfile: { user } }) => {
      if (user) {
        setInputs({ ...user, isChangeAddress: inputs.isChangeAddress });
      }
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
