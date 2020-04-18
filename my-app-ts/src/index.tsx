import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./store";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./HomePage";
import FavesPage from "./FavesPage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavesPage />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
