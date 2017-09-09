import React, { Component } from 'react';

import LoginView from '../LoginView';
import MainView from '../MainView';
import FormView from '../FormView';
import InfoView from '../InfoView';
import GroupView from '../GroupView';
import MapView from '../MapView';

const PAGE = {
  LOGIN: 1,
  MAIN: 2,
  FORM: 3,
  DIESEL_INFO: 4,
  GROUP:5,
  MAP: 6,
};

class DieselForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: PAGE.LOGIN,
    }

    this.onLoginClick = this.onLoginClick.bind(this);
    this.onFormClick = this.onFormClick.bind(this);
    this.onInfoClick = this.onInfoClick.bind(this);
    this.onGroupClick = this.onGroupClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onLoginClick() {
    this.setState({
      page: PAGE.MAIN
    })
    console.log("LOGIN!!!");
  }

  onFormClick() {
    this.setState({
      page: PAGE.FORM
    })
  }

  onInfoClick() {
    this.setState({
      page: PAGE.DIESEL_INFO
    })
  }

  onGroupClick() {
    this.setState({
      page: PAGE.GROUP
    })
  }

  onMapClick() {
    this.setState({
      page: PAGE.MAP
    })
  }

  onBackClick() {
    this.setState({
      page: PAGE.MAIN
    })
  }

  render() {
    return (
      <div>
        {
          this.state.page === PAGE.LOGIN && 
          <LoginView onClick={this.onLoginClick} />
        }
        {
          this.state.page === PAGE.MAIN && 
          <MainView onFormClick={this.onFormClick} onInfoClick={this.onInfoClick} onGroupClick={this.onGroupClick} onMapClick={this.onMapClick} />
        }
        {
          this.state.page === PAGE.FORM && 
          <FormView onBackClick={this.onBackClick} />
        }
        {
          this.state.page === PAGE.DIESEL_INFO && 
          <InfoView avgPrice="30" lowPrice="28" lowPlace="somewhere" onBackClick={this.onBackClick} />
        }
        {
          this.state.page === PAGE.GROUP && 
          <GroupView onBackClick={this.onBackClick} submitted={22} members={50} />
        }
        {
          this.state.page === PAGE.MAP && 
          <MapView onBackClick={this.onBackClick} />
        }
      </div>
    );
  }
}

export default DieselForm;
