import React, { useState } from "react";
import cl from "./Taskblock.module.css";
import { Link } from "react-router-dom";
import MyForm from "../UI/MyForm/MyForm";

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
            <Link
              key={task.id}
              to={`/tasks/${task.id}`}
              className={cl.taskLink}
            >
              <p className={cl.taskItem}>{task.name}</p>
            </Link>
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
