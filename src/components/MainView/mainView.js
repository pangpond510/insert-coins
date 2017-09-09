import React from "react";
import styled from "styled-components";
import { Row, Icon } from "antd";
import Text from "../Text";
import Button from "../Button";

import { COLOR } from "../../styles/variables";

const UserSection = styled(Row)`
  background-color: rgb(64, 64, 64);
  padding: 10px 0px;
`;

const ButtonRow = styled(Row)`padding: 15px 0px;`;
const MainButton = styled(Button)`width: 225px;`;

const MainView = props => (
  <div>
    <UserSection type="flex" align="center">
      <Icon type="user" style={{ fontSize: 70, color: "white" }} />
      <Text text="username" size="30px" color={COLOR.white} bold style={{ lineHeight: "70px" }} />
    </UserSection>
    <br />
    <br />
    <ButtonRow>
      <MainButton label="FORM" icon="save" onClick={props.onFormClick} />
    </ButtonRow>
    <ButtonRow>
      <MainButton label="DIESEL INFOMATION" icon="file-text" onClick={props.onInfoClick} />
    </ButtonRow>
    <ButtonRow>
      <MainButton label="GROUP" icon="team" onClick={props.onGroupClick} />
    </ButtonRow>
    <ButtonRow>
      <MainButton label="OVERVIEW" onClick={props.onMapClick} />
    </ButtonRow>
  </div>
);

export default MainView;
