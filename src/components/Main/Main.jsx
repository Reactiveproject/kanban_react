import React from "react";
import { Route, Routes } from "react-router-dom";
import cl from "./Main.module.css";
import Taskboard from "../Taskboard/Taskboard";
import Taskitem from "../Taskitem/Taskitem";

const Main = ({ taskArray, setTaskArray }) => {
  return (
    <div className={cl.main}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Taskboard taskArray={taskArray} setTaskArray={setTaskArray} />
          }
        />
        <Route
          path="/tasks/:taskid"
          element={<Taskitem taskArray={taskArray} />}
        />
      </Routes>
    </div>
  );
};

export default Main;
