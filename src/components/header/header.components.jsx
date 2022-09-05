import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

// ! Importing the cart component
import CartIcon from "../cart-icon/cart-icon.components";

// ! Importing the cart dropdown
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

// ! 8 23 Memoizing header component getting state from user and cart
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

// functional because we dont need to know anything else for this to function
const Header = ({ currentUser, hidden }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <nav className="nav">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth
                .signOut()
                .then(() => {
                  console.log("User signed out");
                })
                .catch((e) => {
                  console.error(e);
                });
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign in
          </Link>
        )}

        <CartIcon></CartIcon>
      </nav>
      {hidden ? null : <CartDropDown></CartDropDown>}
    </header>
  );
};

/**
 *
 *  Instead of doing the usual way taught in 8 22, by just passing state into the selectors
 *  We can instead use createStructuredSelector
 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
