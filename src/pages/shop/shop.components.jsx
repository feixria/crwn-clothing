import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection.components";

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map((col) => {
          return (
            <PreviewCollection
              key={col.id}
              title={col.title}
              items={col.items}
            ></PreviewCollection>
          );
        })}
      </div>
    );
  }
}

export default ShopPage;
