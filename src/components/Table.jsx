import React, { useState, useEffect } from "react";

export const Table = ({ data, updateStockValue, toggleFetchUpdates }) => {
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
                toggleFetchUpdates={toggleFetchUpdates}
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
                toggleFetchUpdates={toggleFetchUpdates}
              />
            );
          })}
        </tr>
      </tbody>
    </table>
  );
};

const Cell = ({
  stockName,
  index,
  value,
  updateStockValue,
  toggleFetchUpdates,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [stockValue, setStockValue] = useState(value);

  useEffect(() => {
    setStockValue(value);
  }, [value]);

  const activateEditMode = () => {
    setEditMode(true);
    toggleFetchUpdates(false);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStockValue(index, stockName, stockValue);
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
