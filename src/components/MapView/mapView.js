import React from "react";
import styled from "styled-components";
import { Table, Card, Row, Icon } from "antd";
import Button from "../Button";
import Text from "../Text";
import map from "../../img/MapLookAround.png";
import { COLOR } from "../../styles/variables";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px 10px 0px;
`;

const MobileCard = styled(Card)`
  box-shadow: 0 1.5px 9px rgba(0, 0, 0, 0.2);
  border-color: transparent;
`;

const Section = styled(Row)`
  background-color: rgb(64, 64, 64);
  padding: 10px 0px;
`;

const columns = [
  {
    title: "Rank",
    dataIndex: "key",
    key: "key"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Percentage",
    dataIndex: "percent",
    key: "percent"
  }
];
const trophy = <Icon type="trophy" style={{ fontSize: 18, color: COLOR.mustard }} />;

const data = [
  { key: trophy, name: "Ko Bumba", percent: "95%" },
  { key: " 2", name: "Ko Fi Ja", percent: "80%" },
  { key: " 3", name: "Ko Aroon", percent: "60%" },
  { key: " 4", name: "Ko Adang", percent: "45%" },
  { key: " 5", name: "Ko Ra Wi", percent: "25%" }
];

const MapView = props => (
  <div>
    <Section>
      <Text
        text="Look Around"
        size="30px"
        color={COLOR.white}
        bold
        style={{ lineHeight: "70px" }}
      />
    </Section>
    <Background>
      <MobileCard style={{ width: 300 }} bodyStyle={{ padding: "10px" }}>
        <img src={map} alt="Map" width="100%" height="auto" />
      </MobileCard>
      <br />
      <MobileCard style={{ width: 300 }} bodyStyle={{ padding: "20px 10px" }}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </MobileCard>
      <Row type="flex" justify="center" style={{ padding: "20px 5px 20px 5px" }}>
        <Button type="secondary" label="Back" onClick={props.onBackClick} />
      </Row>
    </Background>
  </div>
);

export default MapView;
