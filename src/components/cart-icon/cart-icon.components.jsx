import React from "react";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg.svg";

import "./cart-icon.styles.scss";

// ! initiating the connection to global redux object
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

// ! 8 22 Memoize to negate the effect of rerendering when another state is changed other than cartItem state
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

// ! 8 20 : Selector in redux : We are pulling a specific part we are interested in from the entire state component
// ! The problem with this is that even though the value itemCount did not change, the state is getting rerendered
// ! Because u are creating a new object
const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
