import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Card } from "antd";
import Text from "../Text";

import { COLOR } from "../../styles/variables";
import Overall from "../../img/Overall.png";
import Consumed from "../../img/Consumed.png";
import Application from "../../img/Application.png";

const OverviewView = styled.div`
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

const content2 = {
  width: "60%",
  height: "120px",
  padding: "10px",
  textAlign: "center",
  lineHeight: "30px",
  verticalAlign: "middle"
};

const date = new Date();

class Overview extends Component {
  render() {
    const { avgPrice, lowPrice, lowPlace, highPrice, highPlace } = this.props;
    return (
      <OverviewView>
        <Row>
          <Col span={8}>
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
                  <Text text="Diesel price in thailand" size="12px" color={COLOR.primaryDark} />
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
                  <Text text="Lowest Price" size="27px" color={COLOR.facebook} bold />
                  <br />
                  <Text
                    text={`at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    size="14px"
                    color={COLOR.lightGrey4}
                  />
                </Card.Grid>
                <Card.Grid style={content2}>
                  <Text text="Lowest price starts from" size="12px" color={COLOR.primaryDark} />
                  <br />
                  <Text text={`${lowPrice} Baht/Litr`} size="25px" color={COLOR.peach} bold />
                  <br />
                  <Text text={`at ${lowPlace}`} size="14px" color={COLOR.lightGrey4} />
                  <br />
                </Card.Grid>
              </InfoCard>
            </Row>
          </Col>
          <Col span={8}>
            <Row type="flex" justify="center">
              <InfoCard style={{ width: 300 }}>
                <Card.Grid style={header}>
                  <Text text="Highest Price" size="27px" color={COLOR.mustard} bold />
                  <br />
                  <Text
                    text={`at ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    size="14px"
                    color={COLOR.lightGrey4}
                  />
                </Card.Grid>
                <Card.Grid style={content2}>
                  <Text text="Highest price reach to" size="12px" color={COLOR.primaryDark} />
                  <br />
                  <Text text={`${highPrice} Baht/Litr`} size="25px" color={COLOR.peach} bold />
                  <br />
                  <Text text={`at ${highPlace}`} size="14px" color={COLOR.lightGrey4} />
                  <br />
                </Card.Grid>
              </InfoCard>
            </Row>
          </Col>
        </Row>
        <Row style={{ padding: 20 }}>
          <img src={Overall} alt="Overall" width="45%" height="auto" />
          <img src={Consumed} alt="Consumed" width="45%" height="auto" />
        </Row>
        <Row style={{ padding: 20 }}>
          <img src={Application} alt="Application" width="45%" height="auto" />
        </Row>
      </OverviewView>
    );
  }
}

export default Overview;
