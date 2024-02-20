import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Taskblock from "./components/Taskblock/Taskblock";

function App() {
  const [taskArray, setTaskArray] = useState([
    { id: 1, status: "Backlog", name: "task one", description: "task one" },
    { id: 2, status: "Ready", name: "task two", description: "task two" },
    {
      id: 3,
      status: "In Progress",
      name: "task three",
      description: "task three",
    },
    {
      id: 4,
      status: "Backlog",
      name: "task four",
      description: "task three",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <Taskblock
          blockName="Backlog"
          taskArray={taskArray}
          setTaskArray={setTaskArray}
        />
        <Taskblock
          blockName="Ready"
          taskArray={taskArray}
          setTaskArray={setTaskArray}
        />
        <Taskblock
          blockName="In Progress"
          taskArray={taskArray}
          setTaskArray={setTaskArray}
        />
        <Taskblock
          blockName="Finished"
          taskArray={taskArray}
          setTaskArray={setTaskArray}
        />
      </main>
      <Footer activeCount="10" finishedCount="19" />
    </div>
  );
}

export default App;
