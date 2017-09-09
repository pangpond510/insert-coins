import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Button from "../Button";

const FooterView = styled.div`padding: 10px;`;
const MobileButton = styled(Button)`
  font-size: 12px important!;
  font-weight: 200 important!;
`;

const FooterDefaultProps = {};

class Footer extends Component {
  render() {
    return (
      <FooterView>
        <Row>
          <Col>
            <MobileButton type="primary" label="TypeForm" />
          </Col>
        </Row>
      </FooterView>
    );
  }
}

Footer.defaultProps = FooterDefaultProps;

export default Footer;
