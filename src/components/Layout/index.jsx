import React from "react";
import propTypes from "prop-types";
import * as S from "./styled";
import Header from "../Header";
const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

Layout.propTypes = {
  children: propTypes.element
}

export default Layout;
