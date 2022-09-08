import { createElement } from "react";
import { createSelector } from "reselect";

// ! 11 3 Enumerator hashmap to map collectionId to their respective values
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector(
    [selectCollections],
    (collections) =>
      // ! 12 1 Data normalization, converted array to object with a key so that access time is O(1) instead of running find which is O(n)
      collections[collectionUrlParam]
  );
};
