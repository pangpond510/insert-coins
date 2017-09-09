import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table `
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const Head = styled.th `
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Cell = styled.td `
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Row = styled.tr `
  :nth-child(even) {
    background-color: #dddddd;
  }
`;


class RawDataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      data: [],
      apiGet: (filter) => {
        // console.log(filter);
        const api = `http://localhost:3000/api/DieselData?filter=${JSON.stringify(filter)}`;
        return fetch(api, {
          method: 'get'
        });
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleClick() {
    const filter = {
      where:{island:this.state.searchText}
    };

    this.state.apiGet(filter)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res,
        })
        console.log(res);
      })
      .catch((err) => {console.log(err);});
  }

  render() {
    const {island} = this.props;
    return (
      <div>
        <div>
          <input name="searchText" value={this.state.searchText} onChange={this.handleInputChange} />
          <button onClick={this.handleClick}>search</button>
        </div>
        <br />
        <hr />
        <br />
        <Table>
          <Row>
            <Head>Name</Head>
            <Head>Price</Head>
            <Head>Application</Head>
            <Head>Amount</Head>
          </Row>
          {
            this.state.data.map((data)=>(
              <Row>
                <Cell>{data.island}</Cell>
                <Cell>{Math.round(data.price * 100) / 100}</Cell>
                <Cell>{data.application.join(', ')}</Cell>
                <Cell>{Math.round(data.amount * 100) / 100}</Cell>
              </Row>
            ))
          }
        </Table>
      </div>
    );
  }
}

export default RawDataTable;