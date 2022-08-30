import React from "react";
import PropTypes from "prop-types";

function Header({ id }) {
  return (
    <>
      <h1 id={"id"}>{id}</h1>
    </>
  );
}
Header.propTypes = {
  id: PropTypes.string,
};
export default Header;
