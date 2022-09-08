import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collections-overview.styles.scss";

import PreviewCollection from "../preview-collection/preview-collection.components";

import {
  selectCollections,
  selectCollectionsForPreview,
} from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections, collectionForPreview }) => {
  let collectionItems = [];
  for (const collection in collections) {
    const { id, ...otherCollectionProps } = collections[collection];
    collectionItems.push(
      <PreviewCollection {...otherCollectionProps} key={id} />
    );
  }
  /*
    {Object.values(collections).map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection {...otherCollectionProps} key={id} />;
      })}
    */
  return (
    <div className="collections-overview">
      {collectionForPreview.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection {...otherCollectionProps} key={id} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
  collectionForPreview: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
