import React from "react";

import CustomButton from "../custom-button/custom-button.components";
import CartItem from "../cart-item/cart-item.components";

import "./cart-dropdown.styles.scss";

// ! we need the items
import { connect } from "react-redux";

// ! 8 22 Memoize
import { selectCartItems } from "../../redux/cart/cart.selectors";

// ! 8 24 Replacing this.props.history.push to REACT ROUTER V6 useNavigate
import { useNavigate } from "react-router-dom";

// ! 8 27 Close the drop down when "GO TO CHECKOUT" is clicked
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem}></CartItem>;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          return navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropDown);
