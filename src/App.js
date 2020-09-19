import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserInfo from "./components/auth/UserInfo";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import Logout from "./components/auth/Logout";
import useUser from "./_hooks/useUser.tsx";
import ClassForm from './components/ClassForm.js'

export default function CustomRouter() {
  // useUser is a custom hook (src/_hooks/useUser.tsx)
  const { isLoggedIn, loaded } = useUser();

  return (
    <Router>
      {/* 👇 this is a ternary operator */}
      {!loaded ? null : isLoggedIn() ? (
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/signin">
            <Redirect to="/user"></Redirect>
          </Route>
          <Route path="/user">
            <UserInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/classForm">
            <ClassForm />
          </Route>
        </Switch>
      ) : (
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>

            <Route path="/logout">
              <Redirect to="/signin" />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
    </Router>
  );
}