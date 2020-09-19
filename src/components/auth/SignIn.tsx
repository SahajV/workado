import * as React from "react";
import { auth, google } from "../../firebase";

import { Container, Header, Content, Footer, Navbar, 
  FlexboxGrid, ControlLabel, FormGroup, ButtonToolbar, Button, Form, FormControl, Panel } from 'rsuite';

enum INPUTS {
  email,
  password,
}

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorResponse, setErrorResponse] = React.useState("");

  const clearError = () => {
    if (errorResponse !== "") {
      setErrorResponse("");
    }
  };

  /**
   * The React.ChangeEvent<HTMLInputElement> is from typescript and just shows
   * what value is getting passed in, so you dont have to remember
   * in this case its a "ChangeEvent" coming from "onChange"
   */
  const updateValue = (
    type: INPUTS,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    clearError();
    switch (type) {
      case INPUTS.email:
        setEmail(e.target.value);
        break;
      case INPUTS.password:
        setPassword(e.target.value);
        break;
    }
  };

  // const trySignIn = async () => {
  //   auth.signInWithEmailAndPassword(email, password).catch((err) => {
  //     setPassword("");
  //     switch (err.code) {
  //       default:
  //         setErrorResponse("An unknown error has occurred");
  //     }
  //   });
  // };

  // const trySignUp = async () => {
  //   auth.createUserWithEmailAndPassword(email, password).catch((err) => {
  //     switch (err.code) {
  //       case "auth/email-already-in-use":
  //         setErrorResponse(err.message);
  //         break;
  //       default:
  //         setErrorResponse("An unknown error has occurred");
  //     }
  //   });
  // };

  const trySignInWithGoogle = async () => {
    auth.signInWithPopup(google).catch((err) => {
      switch (err.code) {
        default:
          setErrorResponse("An unknown error has occurred");
      }
    });
  };

  return (
    <div className="show-fake-browser ">
      <Container>
        <Header>
          <Navbar appearance="inverse">
            <Navbar.Header>
              <a className="navbar-brand logo">Educado</a>
            </Navbar.Header>
          </Navbar>
        </Header>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Sign In</h3>} bordered>
                <Form fluid>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button color="red" onClick={trySignInWithGoogle}>Sign in with Google</Button>
                    </ButtonToolbar>
                  </FormGroup>
                </Form>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
        <Footer>Copyright 2020</Footer>
      </Container>
    </div>
  )
}