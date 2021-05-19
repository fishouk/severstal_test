import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "@components/Redux/Store/configureStore";

import Layout from "@components/Layout";
import PrivateRoute from "@components/PrivateRoute";
import Home from "@pages/Home";
import Login from "@pages/Login";
import News from "@pages/News";
import Profile from "@pages/Profile";

import "./index.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <PrivateRoute path={"/profile"} redirectPage={"/login"}>
              <Profile />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
