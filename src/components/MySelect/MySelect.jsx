import React from "react";

const MySelect = ({ defaultValue, dataArray, onChange, value }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled>{defaultValue}</option>
      {dataArray.map((data) => {
        return <option key={data.id}>{data.name}</option>;
      })}
    </select>
  );
};

export default MySelect;
