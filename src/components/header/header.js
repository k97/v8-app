import styled from "styled-components";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Flex, Box } from "rebass";

import menuIcon from "../../images/menu.svg";

//#region Styled
const BrandHeading = styled.h1`
  max-width: 50rem;
  margin: 0 auto;
  text-align: right;
`;

//#endregion Styled

const Header = ({ siteTitle }) => {
  return (
    <Flex>
      <Box p={3} width={1 / 2}>
        <img src={menuIcon} alt="Menu Icon" />
      </Box>
      <Box p={3} width={1 / 2}>
        <BrandHeading>Karthik</BrandHeading>
      </Box>
    </Flex>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header
