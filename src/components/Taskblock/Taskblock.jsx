import React from "react";
import cl from "./Taskblock.module.css";
import { Link } from "react-router-dom";
import MyForm from "../UI/MyForm/MyForm";
import useToggle from "../../Hooks/useToggle";

const Taskblock = ({ blockName, filterdTaskArray, ...props }) => {
  const [active, setActive] = useToggle(true);

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
          <button className={cl.addCartButton} onClick={setActive}>
            +Add Card
          </button>
        ) : (
          <MyForm blockName={blockName} showForm={setActive} {...props} />
        )}
      </div>
    </div>
  );
};

export default Taskblock;
