import React from "react";
import { bloks } from "../../data";

const MySelect = ({ defaultValue, dataArray, onChange, value, blockName }) => {
  const index = bloks.indexOf(blockName);
  const selectStatus = bloks[index - 1];

  const filterArray = dataArray.filter((task) => task.status === selectStatus);

  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled>{defaultValue}</option>

      {filterArray.map((data, index, bloks) => {
        return (
          <option value={data.name} key={data.id}>
            {data.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
