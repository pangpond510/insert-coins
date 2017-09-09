import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Menu, Icon } from "antd";
import Text from "../Text";
import Button from "../Button";

import { COLOR } from "../../styles/variables";

const TAB = {
  OVERVIEW: "overview",
  INDIVIDUAL: "individual",
  COMPARE: "compare"
};

const HeaderView = styled.div`
  background-color: white;
  padding: 10px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: TAB.OVERVIEW
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log("click ", e.key);
    this.setState({
      current: e.key
    });
    this.props.onTopicChange(e.key);
  }

  render() {
    return (
      <HeaderView>
        <Row type="flex" align="middle">
          <Col span={8} offset={1} style={{ textAlign: "left" }}>
            <Text text="Insert Coins " size="50px" color={COLOR.primaryDark} bold />
            <Icon type="pay-circle" style={{ fontSize: 40 }} />
          </Col>
          <Col span={6} offset={5} style={{ textAlign: "right" }}>
            <Icon type="user" style={{ fontSize: 20 }} />
            <Text text={`Project Developer`} size="20px" color={COLOR.primaryDark} bold />
          </Col>
          <Col span={4}>
            <Button type="primary" label="Log out" />
          </Col>
        </Row>
        <Row>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ fontSize: "20px" }}
          >
            <Menu.Item key={TAB.OVERVIEW}>
              <Icon type="global" />Overview
            </Menu.Item>
            <Menu.Item key={TAB.INDIVIDUAL}>
              <Icon type="appstore" />Parts
            </Menu.Item>
            <Menu.Item key={TAB.COMPARE}>
              <Icon type="copy" />Compared
            </Menu.Item>
          </Menu>
        </Row>
      </HeaderView>
    );
  }
}

export default Header;
