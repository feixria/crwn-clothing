import React from "react";

import "./sign-in-and-sign-up.styles.scss";
import "../../components/sign-in/sign-in.components";

import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInAndSignUpPage;
