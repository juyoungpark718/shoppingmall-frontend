import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import GlobalStyle from "./styled-config/global-style";
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
      <GlobalStyle />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
