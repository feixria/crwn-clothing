import React from "react";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.components";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    const res = await auth.signInWithEmailAndPassword(email, password);

    console.log(res.user);

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="heading-sign">I already have an account</h2>
        <span className="heading-subtitle">
          Sign in with your email and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          ></FormInput>

          <FormInput
            label="Password"
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          ></FormInput>

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
