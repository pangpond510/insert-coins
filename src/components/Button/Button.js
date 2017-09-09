import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

import { COLOR } from "../../styles/variables";

const getBGStyle = type => {
  let bgColor = COLOR.cotton;
  let fontColor = COLOR.fontLight;
  let hoverBgColor = COLOR.cotton;
  let hoverFontColor = fontColor;
  switch (type) {
    case "primary":
      bgColor = COLOR.twitter;
      hoverBgColor = lighten(0.1, bgColor);
      break;
    case "secondary":
      bgColor = COLOR.green;
      hoverBgColor = lighten(0.1, bgColor);
      break;
    case "danger":
      bgColor = COLOR.peach;
      hoverBgColor = lighten(0.1, bgColor);
      break;
    default:
      bgColor = COLOR.cotton;
      fontColor = COLOR.darkGrey;
      hoverBgColor = COLOR.darkGrey;
      hoverFontColor = COLOR.cotton;
  }
  return css`
    background-color: ${bgColor};
    color: ${fontColor};

    &:hover,
    &:active,
    &:focus,
    &:active:hover {
      box-shadow: none;
      outline: none;
      background-color: ${hoverBgColor};
      color: ${hoverFontColor};
    }
  `;
};

const getBorder = type => {
  if (type === null || type === undefined) {
    return css`
      border: 2px solid ${COLOR.primaryDark};
    `;
  }
  return css`
    border: 2px solid transparent;
  `;
};

const MyButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.05em;

  ${({ type }) => getBGStyle(type)} ${({ type }) => getBorder(type)} padding: 0.6em 1.4em;
  border-radius: 3em;
  box-shadow: none;
  outline: none;
  transition: background 0.3s, border 0.3s, opacity 0.3s;
`;

const propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

const defaultProps = {
  type: "primary",
  onClick: () => {},
  label: "นี่คือปุ่ม"
};

const Button = ({ type, disabled, onClick, label }) => {
  return (
    <MyButton type={type} onClick={onClick} disabled={disabled}>
      {label}
    </MyButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "danger"])
};

export default Button;
