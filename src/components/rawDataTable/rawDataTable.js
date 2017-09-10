import React from "react";
import styled from "styled-components";

const Table = styled.table`
  font-family: arial, sans-serif;
  font-size: 14px;
  border-collapse: collapse;
  width: 100%;
`;

const Head = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
`;

const Cell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 10px;
`;

const Row = styled.tr`
  :nth-child(even) {
    background-color: #dddddd;
  }
`;

const RawDataTable = props => (
  <Table>
    <Row>
      <Head style={{ width: "5%" }}>#</Head>
      <Head style={{ width: "20%" }}>Price [Bahts/Litr]</Head>
      <Head style={{ width: "55%" }}>Application</Head>
      <Head style={{ width: "20%" }}>Volumn [Litr/Month]</Head>
    </Row>
    {props.data.map((data, index) => (
      <Row>
        <Cell style={{ textAlign: "center" }}>{index + 1}</Cell>
        <Cell style={{ textAlign: "center" }}>{Math.round(data.price * 100) / 100}</Cell>
        <Cell>{data.application.join(", ")}</Cell>
        <Cell style={{ textAlign: "center" }}>{Math.round(data.amount * 100) / 100}</Cell>
      </Row>
    ))}
  </Table>
);

export default RawDataTable;
