import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  }
];

const AvgDataTable = ({ data }) => {
  console.log(data);
  const TableData = Object.keys(data).map((e, i) => {
    return { key: i, name: e, price: Math.round(data[e].price *100)/100 };
  });
  console.log(TableData);
  return <Table columns={columns} dataSource={TableData} pagination={false} />;
};

export default AvgDataTable;
