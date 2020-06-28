import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "../components/Table";
import { getLastTen } from "../redux/stocks-reducer";

const TableContainer = ({ data, getLastTen }) => {
  useEffect(() => {
    getLastTen();
  }, []);
  return <Table data={data} />;
};

export default connect(
  ({ stocks }) => ({
    data: stocks.data,
  }),
  { getLastTen }
)(TableContainer);
