import React from "react";
import PropTypes from "prop-types";
import HeaderPresenter from "./HeaderPresenter";
import { useMutation } from "react-apollo";
import { LOG_USER_OUT } from "../../sharedQueries.locals";

interface IProps {
  isLoggedIn: boolean;
}

const HeaderContainer: React.FC<IProps> = ({ isLoggedIn }) => {
  const [logOut] = useMutation(LOG_USER_OUT);
  const handleLogOut = () => {
    logOut({});
  };
  return (
    <HeaderPresenter
      isLoggedIn={isLoggedIn}
      handleLogOut={() => handleLogOut()}
    />
  );
};

HeaderContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default HeaderContainer;
