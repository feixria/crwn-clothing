import React from "react";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.components";

// ! 11 3 import in connect and also our selector
//import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
//import { createStructuredSelector } from "reselect";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CollectionPage = () => {
  // ! 11 3 the solution to fixing the problem of passing parameters to the mapStateToProps function is by using the useSelector hook
  const params = useParams();
  const collectionStore = useSelector((state) => {
    return selectCollection(params.collectionId)(state);
  });

  const { title, items } = collectionStore;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
