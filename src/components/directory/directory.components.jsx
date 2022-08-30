import React, { Component } from "react";
import MenuItem from "../menuItem/menuItem.components";

import "./directory.styles.scss";

class Directory extends Component {
  // if u wanted to use the this.props inside the contructor
  // u have to pass in that prop to the constructor
  state = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage__directory">
        {this.state.sections.map((sect) => {
          return (
            <MenuItem
              key={sect.id}
              title={sect.title}
              imageUrl={sect.imageUrl}
              size={sect.size}
            ></MenuItem>
          );
        })}
      </div>
    );
  }
}

export default Directory;
