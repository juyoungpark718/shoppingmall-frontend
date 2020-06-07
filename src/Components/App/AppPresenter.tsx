// import Proptypes from "prop-types";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";
// import PropTypes from "prop-types";
import Header from "../Header";
import Home from "../../Routes/Home";
import Login from "../../Routes/Login";
import SignUpForm from "../../Routes/SignUp";

interface IProps {}

const AppPresenter: React.FC<IProps> = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route component={Home} exact path={`/`} />
      <Route component={Login} exact path={`/login`} />
      <Route component={SignUpForm} exact path={`/signup`} />
      <Redirect to={`/`} />
    </Switch>
  </BrowserRouter>
);

AppPresenter.propTypes = {};

export default AppPresenter;
