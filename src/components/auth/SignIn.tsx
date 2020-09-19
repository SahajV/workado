import * as React from "react";
import { auth, google, db } from "../../Firebase";

import { Container, Content, FlexboxGrid, FormGroup, ButtonToolbar, Button, Form, Panel } from 'rsuite';

enum INPUTS {
  email,
  password,
}

export default function SignIn() {
  const [, setEmail] = React.useState("");
  const [, setPassword] = React.useState("");
  const [errorResponse, setErrorResponse] = React.useState("");

  const clearError = () => {
    if (errorResponse !== "") {
      setErrorResponse("");
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
    }).then((result) => {
      let res = JSON.parse(JSON.stringify(result));
      if ( res.additionalUserInfo.isNewUser ) {
        db.collection("users").doc(res.user.uid).set({
          classes: {},
          assignments: []
        });
      }
    });
  };

  return (
    <div className="login-page">
      <Container>
        <Content>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={12}>
              <Panel header={<h3>Login</h3>} bordered>
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
      </Container>
    </div>
  )
}