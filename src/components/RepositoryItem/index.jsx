import React, { memo } from "react";
import propTypes from "prop-types";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Card>
      <S.Title>{name}</S.Title>
      <S.Label>link:</S.Label>
      <S.Link href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.Link>
    </S.Card>
  );
};

RepositoryItem.propTypes = {
  name: propTypes.string,
  linkToRepo: propTypes.string,
  fullName: propTypes.string,
};

export default memo(RepositoryItem);
