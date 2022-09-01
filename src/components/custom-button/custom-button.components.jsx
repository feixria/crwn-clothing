import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${
        isGoogleSignIn ? "custom-button--google" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
