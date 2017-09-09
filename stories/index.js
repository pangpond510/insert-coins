import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import DieselForm from "../src/components/dieselForm"
import RawDataTable from "../src/components/rawDataTable"
import AvgDataTable from "../src/components/avgDataTable"
import Button from "../src/components/Button";
import "antd/dist/antd.css";


storiesOf("Button", module)
  .add("with text", () => <button onClick={action("clicked")}>Hello Button</button>)
  .add("with some emoji", () => <button onClick={action("clicked")}>😀 😎 👍 💯</button>);
  
storiesOf("Form", module)
  .add("diesel price form", () => <DieselForm />)

storiesOf("Table", module)
  .add("raw data", () => <RawDataTable island={"island"} />)
  .add("avg data", () => <AvgDataTable />)
