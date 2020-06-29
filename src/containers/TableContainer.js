import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "../components/Table";
import {
  fetchData,
  updateStockValue,
  toggleFetchUpdates,
} from "../redux/stocks-reducer";

const TableContainer = ({
  data,
  fetchUpdates,
  fetchData,
  updateStockValue,
  toggleFetchUpdates,
}) => {
  useEffect(() => {
    if (fetchUpdates) {
      setInterval(() => {
        fetchData();
      }, 1000);
    }
  }, []);
  return (
    <Table
      data={data}
      updateStockValue={updateStockValue}
      toggleFetchUpdates={toggleFetchUpdates}
    />
  );
};

export default connect(
  ({ stocks }) => ({
    data: stocks.data,
    fetchUpdates: stocks.fetchUpdates,
  }),
  { fetchData, updateStockValue, toggleFetchUpdates }
)(TableContainer);
