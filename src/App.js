import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./components/Dashboard"
import SignIn from "./components/auth/SignIn";
import Logout from "./components/auth/Logout";
import useUser from "./_hooks/useUser.tsx";
import Testing from "./components/Testing"

export default function CustomRouter() {
  // useUser is a custom hook (src/_hooks/useUser.tsx)
  const { isLoggedIn, loaded } = useUser();

  return (
    <Router>
      {!loaded ? null : isLoggedIn() ? (
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/testing">
            <Testing />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      ) : (
          <Switch>
            <Route path="/logout">
              <Redirect to="/" />
            </Route>
            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        )}
    </Router>
  );
}