import React, { Component } from 'react';
import styled from 'styled-components';

const applicationText = {
  generate: "for generating an electricity power",
  vehicle: "for vehicle or machine",
  selling: "for selling",
  etc: "etc."
}


const Background = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: lightgray;
`

const Section = styled.div`
  margin-bottom: 20px;
  text-align: left;
`

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
      apiPost: (data) => {
        const api = 'http://localhost:3000/api/DieselData';
        return fetch(api, {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      }
    }

    this.sentData = this.sentData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  sentData() {
    let application = [];
    if(this.state.isGenerate) application = application.concat([applicationText.generate]);
    if(this.state.isVehicle) application = application.concat([applicationText.vehicle]);
    if(this.state.isSelling) application = application.concat([applicationText.selling]);
    if(this.state.isEtc) application = application.concat([applicationText.etc]);
    const parameter = {
      island: this.state.island,
      price: Number(this.state.price),
      application: application,
      amount: Number(this.state.amount),
      month: Number(new Date().getMonth()+1),
      year: Number(new Date().getFullYear()),
    };
    // console.log(parameter);

    this.state.apiPost(parameter)
      .then((res) => res.json())
      .then((res) => {console.log(res);})
      .catch((err) => {console.log(err);});

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Background>
        <Section>
          <h3>island</h3>
          <input value={this.state.island} onChange={this.handleInputChange} name="island" />
        </Section>
        <Section>
          <h3>price (Bath/Litr)</h3>
          <input value={this.state.price} onChange={this.handleInputChange} name="price" />
        </Section>
        <Section>
          <h3>application</h3>
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isGenerate} name="isGenerate" />
          <label for="isGenerate">{applicationText.generate}</label><br />
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isVehicle} name="isVehicle" />
          <label for="isVehicle">{applicationText.vehicle}</label><br />
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isSelling} name="isSelling" />
          <label for="isSelling">{applicationText.selling}</label><br />
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isEtc} name="isEtc" />
          <label for="isEtc">{applicationText.etc}</label><br />
        </Section>
        <Section>
          <h3>amount of diesel (Litr/Month)</h3>
          <input value={this.state.amount} onChange={this.handleInputChange} name="amount" />
        </Section>
        <Section>
          <button onClick={() => this.sentData()}>Submit</button>
        </Section>
        <button onClick={this.props.onBackClick}>back</button>
      </Background>
    );
  }
}

export default FormView;