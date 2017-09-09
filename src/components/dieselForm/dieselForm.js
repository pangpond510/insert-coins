import React, { Component } from 'react';
import PropTypes from 'prop-types';

const applicationText = {
  generate: "for generating an electricity power",
  vehicle: "for vehicle or machine",
  selling: "for selling",
  etc: "etc."
}

class DieselForm extends Component {
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
      date: new Date(),
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
      <div>
        <div>
          <h3>island</h3>
          <input value={this.state.island} onChange={this.handleInputChange} name="island" />
        </div>
        <div>
          <h3>price (Bath/Litr)</h3>
          <input value={this.state.price} onChange={this.handleInputChange} name="price" />
        </div>
        <div>
          <h3>application</h3>
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isGenerate} name="isGenerate" />
          <label for="isGenerate">{applicationText.generate}</label><br />
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isVehicle} name="isVehicle" />
          <label for="isVehicle">{applicationText.vehicle}</label><br />
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isSelling} name="isSelling" />
          <label for="isSelling">{applicationText.selling}</label><br />
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.isEtc} name="isEtc" />
          <label for="isEtc">{applicationText.etc}</label><br />
        </div>
        <div>
          <h3>amount of diesel (Litr/Month)</h3>
          <input value={this.state.amount} onChange={this.handleInputChange} name="amount" />
        </div>
        <div>
          <br /><br />
          <button onClick={() => this.sentData()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default DieselForm;