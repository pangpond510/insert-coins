import React, { Component } from 'react';

import LoginView from '../LoginView';
import MainView from '../MainView';
import FormView from '../FormView';
import InfoView from '../InfoView';

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
          <MainView onFormClick={this.onFormClick} onInfoClick={this.onInfoClick} />
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
          <div>
            
          </div>
        }
        {
          this.state.page === PAGE.MAP && 
          <div>
            
          </div>
        }
      </div>
    );
  }
}

export default DieselForm;
