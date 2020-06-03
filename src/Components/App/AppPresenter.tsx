import Proptypes from "prop-types";
import React from "react";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) =>
  isLoggedIn ? <span>login!</span> : <span>log out!</span>;

AppPresenter.propTypes = {
  isLoggedIn: Proptypes.bool.isRequired,
};
export default AppPresenter;
