import React from "react";
import styled from "styled-components";
import { Progress, Row, Col, Icon } from "antd";
import Text from "../Text";
import Button from "../Button";

import { COLOR } from "../../styles/variables";

const Background = styled.div`padding: 20px;`;

const Header = styled(Row)`
  background-color: white;
  padding: 20px 10px 20px 20px;
  margin-bottom: 20px;
`;

const Body = styled.div`text-align: center;`;

const FormView = ({ submitted, members, onBackClick }) => (
  <div>
    <Header>
      <Col xs={8}>
        <Progress type="circle" width="100" percent={submitted / members * 100} />
      </Col>
      <Col xs={16}>
        <Text
          text={`Members : ${submitted}/${members}`}
          size="20px"
          color={COLOR.primaryDark}
          style={{ lineHeight: "90px" }}
        />
      </Col>
    </Header>
    <Background>
      <Body>
        {[...Array(members)].map((x, i) => {
          if (i < submitted)
            return <Icon type="smile" style={{ fontSize: 50, padding: 5, color: COLOR.twitter }} />;
          else return <Icon type="frown-o" style={{ fontSize: 50, padding: 5 }} />;
        })}
      </Body>
      <br />
      <Row type="flex" justify="center" style={{ padding: "10px 5px 20px 5px" }}>
        <Button type="secondary" label="Back" onClick={onBackClick} />
      </Row>
    </Background>
  </div>
);

export default FormView;
