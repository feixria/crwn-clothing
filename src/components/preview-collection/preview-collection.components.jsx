import React from "react";
import "./preview-collection.styles.scss";
import "./../collection-item/collection-item.components";
import CollectionItem from "./../collection-item/collection-item.components";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="collection__title">{title}</h1>
      <div className="collection__preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
