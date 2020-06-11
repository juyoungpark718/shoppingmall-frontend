import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import Home from "../../Routes/Home";
import Login from "../../Routes/Login";
import SignUpForm from "../../Routes/SignUp";
import UserProfile from "../../Routes/UserProfile";
import { Helmet } from "react-helmet";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.FC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Header isLoggedIn={isLoggedIn} />
    {isLoggedIn ? <PrivateRoute /> : <PublicRoute />}
  </BrowserRouter>
);

const PrivateRoute: React.FC = () => (
  <Switch>
    <Route component={Home} exact path={`/`} />
    <Route component={UserProfile} exact path={`/profile/`} />
    <Redirect from={`*`} to={`/`} />
  </Switch>
);

const PublicRoute: React.FC = () => (
  <Switch>
    <Route component={Home} exact path={`/`} />
    <Route component={Login} exact path={`/login`} />
    <Route component={SignUpForm} exact path={`/signup`} />
    <Redirect from={`*`} to={`/`} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppPresenter;
