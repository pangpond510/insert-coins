import React, { Component } from "react";
import styled from "styled-components";

import { Row, Card } from "antd";
import Text from "../Text";
import AvgTable from "../avgDataTable"

import { COLOR } from "../../styles/variables";

const InfoViewDefaultProps = {};

const MobileCard = styled(Card)`
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

class InfoView extends Component {
  render() {
    const { onBackClick, avgPrice, lowPrice, lowPlace } = this.props;
    return (
      <div>
        <Row type="flex" justify="center" style={{ padding: "20px 5px 0px 5px" }}>
          <MobileCard style={{ width: 300 }}>
            <Card.Grid style={header}>
              <Text text="Average Price" size="27px" color={COLOR.green2} bold />
              <br />
              <Text
                text={`at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                size="14px"
                color={COLOR.lightGrey4}
              />
            </Card.Grid>
            <Card.Grid style={content1}>
              <Text text="Diesel price in thailand" size="12px" color={COLOR.primaryDark} />
              <br />
              <Text text={`${avgPrice} Baht/Litr`} size="25px" color={COLOR.peach} bold />
            </Card.Grid>
          </MobileCard>
        </Row>
        <Row type="flex" justify="center" style={{ padding: "10px 5px 0px 5px" }}>
          <MobileCard style={{ width: 300 }}>
            <Card.Grid style={header}>
              <Text text="Lowest Price" size="27px" color={COLOR.facebook} bold />
              <br />
              <Text
                text={`at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
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
          </MobileCard>
        </Row>
        <Row type="flex" justify="center" style={{ padding: "20px 20px 20px 20px" }}>
          <AvgTable />
        </Row>
        <button onClick={onBackClick}>back</button>
      </div>
    );
  }
}

InfoView.defaultProps = InfoViewDefaultProps;

export default InfoView;
