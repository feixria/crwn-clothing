import React from "react";

// ! 10 2 Refactoring React state into redux root global state
//import { connect } from "react-redux";
//import { selectCollections } from "../../redux/shop/shop.selectors";
//import { createStructuredSelector } from "reselect";

// ! 10 3 Refactored the pulling of preview-collection component into its own React.Component functional unit
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";

// ! 11 1
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import CollectionPage from "../collection/collection.components";

const ShopPage = () => {
  // Using useLocation hook to get the pathname which should be /shop
  const location = useLocation();
  const passedParams = useParams();

  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionsOverview />}></Route>
        <Route path={`:collectionId`} element={<CollectionPage />}></Route>
      </Routes>
    </div>
  );
};

export default ShopPage;
