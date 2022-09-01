import React from "react";

import "./sign-in-and-sign-up.styles.scss";
import "../../components/sign-in/sign-in.components";
import SignIn from "../../components/sign-in/sign-in.components";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
    </div>
  );
};

export default SignInAndSignUpPage;
