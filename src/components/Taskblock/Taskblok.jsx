import React from "react";
import cl from "./Taskblock.module.css";

const Taskblock = (props) => {
  return (
    <div className={cl.taskBlock}>
      <h3>{props.blockName}</h3>
      <div className={cl.taskItems}>
        <p className={cl.taskItem}>Lorem ipsum dolor sit amet</p>
        <p className={cl.taskItem}>Lorem ipsum dolor sit amet</p>
        <p className={cl.taskItem}>Lorem ipsum dolor sit amet</p>
      </div>
      <button className={cl.addTaskButton}>+Add card</button>
    </div>
  );
};

export default Taskblock;
