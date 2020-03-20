/* global window */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import { FiArrowUp } from "react-icons/fi";
import PageTransition from "gatsby-plugin-page-transitions";

import Header from "./header";
import useToTop from "../hooks/useToTop";

import "normalize-scss";
import "./layout.scss";

import useSiteMetadata from "../hooks/useSiteMetadata";

const Page = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const ToTop = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: transparent;
  padding: 0;
  cursor: pointer;
  background-color: #000;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &.isVisible {
    opacity: 1;

    &:hover {
      opacity: 0.6;
    }
  }

  svg {
    display: block;
    position: relative;
    top: 0;
    width: 24px;
    height: auto;
    color: #fff;
    margin: 0 auto;
  }
`;

/** ***************************************************************************
 *  Default Page Layout
 *************************************************************************** */

const Layout = ({ children }) => {
  const toTopIsVisible = useToTop();
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Header siteTitle={siteMetadata.title} />
      <Page className="hasTransition">
        <Link to="/">Home</Link>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>

        <main id="pageTop">{children}</main>
        <footer>© {new Date().getFullYear()}</footer>

        <ToTop to="#pageTop" className={toTopIsVisible ? "isVisible" : null}>
          <FiArrowUp />
        </ToTop>
      </Page>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
