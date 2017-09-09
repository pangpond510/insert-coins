import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Row, Col } from "antd";
import Button from "../Button";

import { COLOR } from "../../styles/variables";

const HeaderView = styled.div`padding: 10px;`;
const MobileButton = styled(Button)`
  font-size: 12px important!;
  font-weight: 200 important!;
`;

const HeaderDefaultProps = {};

class Header extends Component {
  render() {
    return (
      <HeaderView>
        <Row>
          <Col>
            <MobileButton type="primary" label="TypeForm" />
          </Col>
        </Row>
      </HeaderView>
    );
  }
}

Header.defaultProps = HeaderDefaultProps;

export default Header;
