import React, { useState } from "react";
import cl from "./Taskblock.module.css";
import MyForm from "../MyForm/MyForm";

const Taskblock = ({ blockName, filterdTaskArray, ...props }) => {
  const [active, setActive] = useState("true");

  const showForm = () => {
    setActive(!active);
  };

  return (
    <div className={cl.taskBlock}>
      <h3>{blockName}</h3>
      <div className={cl.taskItems}>
        {filterdTaskArray.map((task) => {
          return (
            <div
              key={task.id}
              onClick={() => {
                console.log("hello");
              }}
            >
              <p className={cl.taskItem}>{task.name}</p>
            </div>
          );
        })}
        {active ? (
          <button className={cl.addCartButton} onClick={showForm}>
            +Add Card
          </button>
        ) : (
          <MyForm blockName={blockName} showForm={showForm} {...props} />
        )}
      </div>
    </div>
  );
};

export default Taskblock;
