import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "../components/Table";
import {
  getAllData,
  getLastTen,
  updateStockValue,
} from "../redux/stocks-reducer";

const TableContainer = ({ data, getAllData, getLastTen, updateStockValue }) => {
  useEffect(() => {
    getLastTen();
  }, []);
  return <Table data={data} updateStockValue={updateStockValue} />;
};

export default connect(
  ({ stocks }) => ({
    data: stocks.data,
  }),
  { getAllData, getLastTen, updateStockValue }
)(TableContainer);
