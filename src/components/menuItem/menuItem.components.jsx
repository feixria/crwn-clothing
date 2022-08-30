import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`homepage__menuItem ${
        size ? `homepage__menuItem--${size}` : ""
      }`}
      onClick={() => navigate(`${location.pathname}${linkUrl}`)}
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
