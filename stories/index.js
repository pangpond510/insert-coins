import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Header from "../src/components/Header";
import Button from "../src/components/Button";
import "antd/dist/antd.css";
storiesOf("Button", module)
  .add("with text", () => <button onClick={action("clicked")}>Hello Button</button>)
  .add("with some emoji", () => <button onClick={action("clicked")}>😀 😎 👍 💯</button>)
  .add("Button", () => {
    return (
      <div>
        <Button />
        <Button type="secondary" />
        <Button type="danger" />
      </div>
    );
  });

storiesOf("Header", module).add("Header in Desktop", () => <Header />);
