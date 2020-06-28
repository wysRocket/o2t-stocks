import React from "react";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Chart = ({ data }) => {
  const flatten = data.map((i) => i.stocks);
  console.log(flatten);
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 30, right: 5, left: 30, bottom: 15 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="index" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="stocks.CAC40" stroke="#8884d8" />
      <Line type="monotone" dataKey="stocks.NASDAQ" stroke="#82ca9d" />
    </LineChart>
  );
};

export default connect(
  ({ stocks }) => ({
    data: stocks.data,
  }),
  {}
)(Chart);