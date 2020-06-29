import React, { useState } from "react";

export const Table = ({ data, updateStockValue }) => {
  return (
    <table className="table table-bordered table-responsive">
      <tbody>
        <tr>
          <th scope="row">CAC40</th>
          {data.map((i) => {
            return (
              <Cell
                stockName="CAC40"
                value={i.CAC40}
                key={i.index}
                index={i.index}
                updateStockValue={updateStockValue}
              />
            );
          })}
        </tr>
        <tr>
          <th scope="row">NASDAQ</th>
          {data.map((i) => {
            return (
              <Cell
                stockName="NASDAQ"
                value={i.NASDAQ}
                key={i.index}
                index={i.index}
                updateStockValue={updateStockValue}
              />
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

const Cell = ({ stockName, index, value, updateStockValue }) => {
  const [editMode, setEditMode] = useState(false);
  const [stockValue, setStockValue] = useState(value);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    console.log({ index, property: { stockValue } });
    updateStockValue({ index, stockName: stockValue });
  };

  const onStockValueChange = (e) => {
    setStockValue(e.currentTarget.value);
  };
  return (
    <td>
      {!editMode && <span onDoubleClick={activateEditMode}>{value}</span>}
      {editMode && (
        <input
          onChange={onStockValueChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={stockValue}
        />
      )}
    </td>
  );
};
