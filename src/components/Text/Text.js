import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { FONT } from "../../styles/variables";

const T = styled.text`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "inherit")};
  ${({ truncateWidth }) =>
    truncateWidth &&
    css`
      width: ${truncateWidth};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `} user-select: ${({ disableSelection }) => (disableSelection ? "none" : "auto")};
  ${({ light }) => light && css`font-weight: 300;`};
`;

const Text = ({ text, ...restProps }) => <T {...restProps}>{text}</T>;

Text.propTypes = {
  text: PropTypes.node,
  bold: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  truncateWidth: PropTypes.string,
  disableSelection: PropTypes.bool
};

Text.defaultProps = {
  bold: false,
  color: "white",
  size: "18px",
  truncateWidth: "",
  disableSelection: false
};

export default Text;
