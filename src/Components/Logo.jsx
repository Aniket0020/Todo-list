// eslint-disable-next-line no-unused-vars
import React from "react";
import "./logo.css";
import PropTypes from "prop-types";
function Logo(props) {
  return (
    <div className="logo">
      <h2> {props.title}</h2>
    </div>
  );
}

Logo.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Logo;
