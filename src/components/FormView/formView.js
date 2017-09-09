import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Input, Checkbox, Card } from "antd";
import Text from "../Text";
import Button from "../Button";

import { COLOR } from "../../styles/variables";

const applicationText = {
  generate: "for generating an electricity power",
  vehicle: "for vehicle or machine",
  selling: "for selling",
  etc: "etc."
};

const Section = styled(Row)`
  margin-bottom: 20px;
  text-align: left;
`;

const InfoCard = styled(Card)`
  box-shadow: 0 1.5px 9px rgba(0, 0, 0, 0.2);
  border-color: transparent;
  width: 94%;
  margin: 20px 10px;
`;

class FormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      island: "",
      price: "",
      amount: "",
      isGenerate: false,
      isVehicle: false,
      isSelling: false,
      isEtc: false,
      apiPost: data => {
        const api = "http://localhost:3000/api/DieselData";
        return fetch(api, {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
      }
    };

    this.sentData = this.sentData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  sentData() {
    let application = [];
    if (this.state.isGenerate) application = application.concat([applicationText.generate]);
    if (this.state.isVehicle) application = application.concat([applicationText.vehicle]);
    if (this.state.isSelling) application = application.concat([applicationText.selling]);
    if (this.state.isEtc) application = application.concat([applicationText.etc]);
    const parameter = {
      island: this.state.island,
      price: Number(this.state.price),
      application: application,
      amount: Number(this.state.amount),
      month: Number(new Date().getMonth() + 1),
      year: Number(new Date().getFullYear())
    };
    // console.log(parameter);

    this.state
      .apiPost(parameter)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <InfoCard>
          <Section>
            <Text text="island name : " size="20px" color={COLOR.primaryDark} />
            <Input
              value={this.state.island}
              onChange={this.handleInputChange}
              size="large"
              name="island"
            />
          </Section>
          <Section>
            <Text text="price (Bath/Litr) : " size="18px" color={COLOR.primaryDark} />
            <Input
              value={this.state.price}
              onChange={this.handleInputChange}
              size="large"
              name="price"
            />
          </Section>
          <Section>
            <Text text="application : " size="18px" color={COLOR.primaryDark} />
            <Checkbox
              onChange={this.handleInputChange}
              checked={this.state.isGenerate}
              name="isGenerate"
            >
              <Text text={applicationText.generate} size="13px" color={COLOR.primaryDark} />
            </Checkbox>
            <br />
            <Checkbox
              onChange={this.handleInputChange}
              checked={this.state.isVehicle}
              name="isVehicle"
            >
              <Text text={applicationText.vehicle} size="13px" color={COLOR.primaryDark} />
            </Checkbox>
            <br />
            <Checkbox
              onChange={this.handleInputChange}
              checked={this.state.isSelling}
              name="isSelling"
            >
              <Text text={applicationText.selling} size="13px" color={COLOR.primaryDark} />
            </Checkbox>
            <br />
            <Checkbox onChange={this.handleInputChange} checked={this.state.isEtc} name="isEtc">
              <Text text={applicationText.etc} size="13px" color={COLOR.primaryDark} />
            </Checkbox>
            <br />
          </Section>
          <Section>
            <Text text="amount of diesel (Litr/Month): " size="18px" color={COLOR.primaryDark} />
            <Input
              value={this.state.amount}
              onChange={this.handleInputChange}
              size="large"
              name="amount"
            />
          </Section>
        </InfoCard>
        <Section>
          <Col xs={12}>
            <Row type="flex" justify="center">
              <Button label="Submit" onClick={() => this.sentData()} />
            </Row>
          </Col>
          <Col xs={12}>
            <Row type="flex" justify="center">
              <Button type="secondary" label="Back" onClick={this.props.onBackClick} />
            </Row>
          </Col>
        </Section>
      </div>
    );
  }
}

export default FormView;
