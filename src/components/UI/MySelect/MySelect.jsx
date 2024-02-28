import React from "react";
import { bloks } from "../../data";
import cl from "./MySelect.module.css";

const MySelect = ({ defaultValue, dataArray, onChange, value, blockName }) => {
  const index = bloks.indexOf(blockName);
  const selectStatus = bloks[index - 1];

  const filterArray = dataArray.filter((task) => task.status === selectStatus);

  return (
    <select
      className={cl.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option className={cl.option}>{defaultValue}</option>

      {filterArray.map((data) => {
        return (
          <option className={cl.option} value={data.name} key={data.id}>
            {data.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
