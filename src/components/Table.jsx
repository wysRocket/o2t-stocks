import React from "react";

export const Table = ({ data }) => {
  return (
    <table className="table table-bordered table-responsive">
      <tbody>
        <tr>
          <th scope="row">CAC40</th>
          {data.map((i) => {
            return <Cell value={i.stocks.CAC40} key={i.index} />;
          })}
        </tr>
        <tr>
          <th scope="row">NASDAQ</th>
          {data.map((i) => {
            return <Cell value={i.stocks.NASDAQ} key={i.index} />;
          })}
        </tr>
      </tbody>
    </table>
  );
};

const Cell = ({ value }) => {
  return <td>{value}</td>;
};
