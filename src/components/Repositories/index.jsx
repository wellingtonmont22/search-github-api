import React from "react";
import * as S from "./styled";
import RepositoryItem from "../RepositoryItem";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabsList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabsList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="repo 1"
          linkToRepo="https://github.com/wellingtonmont22/aula_bootstrap"
          fullName="Full name"
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="repo 2"
          linkToRepo="https://github.com/wellingtonmont22/aula_bootstrap"
          fullName="Full name"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default Repositories;
