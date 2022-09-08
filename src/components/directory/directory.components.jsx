import React from "react";
import MenuItem from "../menuItem/menuItem.components";

import "./directory.styles.scss";

// ! 10 1 Import the Directory reducer to replace state
import { connect } from "react-redux";

// ! 10 1 Because there is no need to initialize or declare state, since we are using redux
// ! 10 1 The class component can be changed into a functional component
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  // if u wanted to use the this.props inside the contructor
  // u have to pass in that prop to the constructor
  return (
    <div className="homepage__directory">
      {sections.map((sect) => {
        return (
          <MenuItem
            key={sect.id}
            title={sect.title}
            imageUrl={sect.imageUrl}
            size={sect.size}
            linkUrl={sect.linkUrl}
          ></MenuItem>
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
