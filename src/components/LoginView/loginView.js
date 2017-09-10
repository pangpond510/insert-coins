import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import Button from "../Button";

import Logo from "../../img/Logo.png";

const LoginView = props => (
  <div>
    <Row type="flex" align="center" style={{ padding: "100px 0 0px" }}>
      <img src={Logo} alt="Logo" width="260px" height="240px" />
    </Row>
    <Row type="flex" align="center">
      <Button label="  Log in" size="20" icon="unlock" onClick={props.onClick} />
    </Row>
  </div>
);

export default LoginView;
