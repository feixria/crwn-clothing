import React from "react";
import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      className={`homepage__menuItem ${
        size ? `homepage__menuItem--${size}` : ""
      }`}
    >
      <div
        className="homepage__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="homepage__content">
        <h1 className="homepage__title">{title}</h1>
        <span className="homepage__subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
