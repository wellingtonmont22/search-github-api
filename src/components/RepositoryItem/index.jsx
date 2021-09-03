import React from "react";
import propTypes from "prop-types";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>full name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</a>
    </div>
  );
};

RepositoryItem.propTypes = {
  name: propTypes.string,
  linkToRepo: propTypes.string,
  fullName: propTypes.string
};

export default RepositoryItem;
