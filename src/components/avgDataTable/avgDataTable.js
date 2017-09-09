import React from 'react';
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


const AvgDataTable = ({data}) =>
  <Table>
    <Row>
      <Head>Name</Head>
      <Head>Price</Head>
    </Row>
    {
      Object.keys(data).map((key)=>{
        const info = data[key];
        return (
          <Row>
            <Cell>{key}</Cell>
            <Cell>{Math.round(info.price * 100) / 100}</Cell>
          </Row>
        );
      })
    }
  </Table>

export default AvgDataTable;