import React from "react";
import "./homepage.styles.scss";
import "../../components/menuItem/menuItem.components";
import MenuItem from "../../components/menuItem/menuItem.components";
import Directory from "../../components/directory/directory.components";

const HomePage = () => {
  // block name = homepage
  return (
    <div className="homepage">
      <Directory></Directory>
    </div>
  );
};

export default HomePage;
