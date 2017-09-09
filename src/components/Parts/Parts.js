import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Card } from "antd";
import Text from "../Text";

import { COLOR } from "../../styles/variables";
import EachPrice from "../../img/EachPrice.png";
import EachConsumed from "../../img/EachConsumed.png";
import EachApplication from "../../img/EachApplication.png";
import Map from "../../img/Map.png";

const PartsView = styled.div`
  background-color: white;
  padding: 10px;
`;

const InfoCard = styled(Card)`
  box-shadow: 0 1.5px 9px rgba(0, 0, 0, 0.2);
  border-color: transparent;
`;

const header = {
  width: "40%",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  verticalAlign: "middle"
};

const content1 = {
  width: "60%",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  lineHeight: "45px",
  verticalAlign: "middle"
};

const date = new Date();

class Parts extends Component {
  render() {
    const { avgPrice, avgVolume } = this.props;
    return (
      <PartsView>
        <Row>
          <Col span={8} offset={4}>
            <Row type="flex" justify="center">
              <InfoCard style={{ width: 300 }}>
                <Card.Grid style={header}>
                  <Text text="Average Price" size="27px" color={COLOR.green2} bold />
                  <br />
                  <Text
                    text={`at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    size="14px"
                    color={COLOR.lightGrey4}
                  />
                </Card.Grid>
                <Card.Grid style={content1}>
                  <Text text="Diesel price in xxxxxxx" size="12px" color={COLOR.primaryDark} />
                  <br />
                  <Text text={`${avgPrice} Baht/Litr`} size="25px" color={COLOR.peach} bold />
                </Card.Grid>
              </InfoCard>
            </Row>
          </Col>
          <Col span={8}>
            <Row type="flex" justify="center">
              <InfoCard style={{ width: 300 }}>
                <Card.Grid style={header}>
                  <Text text="Average Diesel Volume" size="19px" color={COLOR.green2} bold />
                  <br />
                  <Text
                    text={`at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    size="14px"
                    color={COLOR.lightGrey4}
                  />
                </Card.Grid>
                <Card.Grid style={content1}>
                  <Text text="Diesel volume in xxxxxxx" size="12px" color={COLOR.primaryDark} />
                  <br />
                  <Text text={`${avgVolume} Baht/Litr`} size="25px" color={COLOR.peach} bold />
                </Card.Grid>
              </InfoCard>
            </Row>
          </Col>
        </Row>
        <Row style={{ padding: 20 }}>
          <img src={EachPrice} alt="EachPrice" width="45%" height="auto" />
          <img src={EachConsumed} alt="EachConsumed" width="45%" height="auto" />
        </Row>
        <Row style={{ padding: 20 }}>
          <img src={EachApplication} alt="EachApplication" width="45%" height="auto" />
          <img src={Map} alt="Map" width="45%" height="auto" />
        </Row>
      </PartsView>
    );
  }
}

export default Parts;
