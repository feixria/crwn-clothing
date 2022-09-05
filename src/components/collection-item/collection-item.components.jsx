import React from "react";

import "./collection-item.styles.scss";

// ! importing custom button 8 14
import CustomButton from "../custom-button/custom-button.components";

// ! importing the utilities so tha we can connect dispatchToProps 8 15
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
