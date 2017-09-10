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

const Notice = styled.div`
  height: 21vh;
  display: flex;
  background-color: #ef6453;
  padding: 20px;
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
    <ButtonRow>
      <MainButton label="  SUBMIT FORM" icon="save" onClick={props.onFormClick} />
    </ButtonRow>
    <ButtonRow>
      <MainButton label="  DIESEL INFORMATION" icon="file-text" onClick={props.onInfoClick} />
    </ButtonRow>
    <ButtonRow>
      <MainButton label="  COMMUNITY GROUP" icon="team" onClick={props.onGroupClick} />
    </ButtonRow>
    <ButtonRow>
      <MainButton label="  LOOK AROUND" icon="global" onClick={props.onMapClick} />
    </ButtonRow>
    <br />
    <br />
    <Notice>
      <Icon type="bulb" style={{ fontSize: "65px", color: "#f2f2f2" }} />
      <Text text=" Please submit the diesel information" size="23px" color={COLOR.body} bold />
    </Notice>
  </div>
);

export default MainView;
