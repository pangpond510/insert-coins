import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RawDataTable from "../src/components/rawDataTable";
import AvgDataTable from "../src/components/avgDataTable";
import LoginView from "../src/components/LoginView";
import MainView from "../src/components/MainView";
import FormView from "../src/components/FormView";
import InfoView from "../src/components/InfoView";
import GroupView from "../src/components/GroupView";

import "antd/dist/antd.css";
  
storiesOf("Form", module)
  .add("diesel price form", () => <FormView />)

storiesOf("Table", module)
  .add("raw data", () => <RawDataTable island={"island"} />)
  .add("avg data", () => <AvgDataTable />)

storiesOf("View", module)
  .add("1.login view", () => <LoginView onClick={()=>{console.log("LOGIN!!")}}/>)
  .add("2.main view", () => <MainView />)
  .add("3.form view", () => <FormView />)
  .add("4.diesel info view", () => <InfoView avgPrice={100} lowPrice={60} lowPlace="Phuket" />)
  .add("5.group view", () => <GroupView submitted={22} members={50} />)
