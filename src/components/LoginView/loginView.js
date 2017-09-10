import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import Button from "../Button";

const LoginButton = styled(Button)`font-size: 12px !important;`;

const LoginView = props => (
  <div>
    <Row type="flex" align="center" style={{ padding: "70% 0" }}>
      <LoginButton label="  Log in" size="25" icon="unlock" onClick={props.onClick} />
    </Row>
  </div>
);

export default LoginView;
