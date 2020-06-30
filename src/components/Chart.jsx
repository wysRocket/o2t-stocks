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

const Chart = ({ data, error }) => {
  return (
    <div className="chart">
      {error ? <div className="error">{error}</div> : null}
      <LineChart
        width={730}
        height={350}
        data={data}
        margin={{ top: 30, bottom: 15 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="CAC40" stroke="#8884d8" />
        <Line type="monotone" dataKey="NASDAQ" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default connect(
  ({ stocks }) => ({
    data: stocks.data,
    error: stocks.error,
  }),
  {}
)(Chart);
