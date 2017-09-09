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


class AvgDataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      apiGet: () => {
        // console.log(filter);
        const api = `http://localhost:3000/api/DieselData`;
        return fetch(api, {
          method: 'get'
        });
      }
    };
  }

  componentWillMount() {
    this.state.apiGet()
      .then((res) => res.json())
      .then((res) => {
        let avg = {};
        for(let i in res) {
          if(avg[res[i].island] === undefined) {
            avg[res[i].island] = {
              price: res[i].price,
              count: 1
            }
          }
          else {
            const avgPrice = (avg[res[i].island].price*avg[res[i].island].count + res[i].price)/(avg[res[i].island].count+1);
            avg[res[i].island].price = avgPrice;
            avg[res[i].island].count += 1;
          }
        }
        this.setState({
          data: avg
        })
        // console.log(this.state.data);
      })
      .catch((err) => {console.log(err);});

  }

  render() {
    const {island} = this.props;
    return (
        <Table>
          <Row>
            <Head>Name</Head>
            <Head>Price</Head>
          </Row>
          {
            Object.keys(this.state.data).map((key)=>{
              const info = this.state.data[key];
              return (
                <Row>
                  <Cell>{key}</Cell>
                  <Cell>{info.price}</Cell>
                </Row>
              );
            })
          }
        </Table>
    );
  }
}

export default AvgDataTable;