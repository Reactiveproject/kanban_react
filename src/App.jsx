import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Taskblock from "./components/Taskblock/Taskblock";
import { bloks, tasks } from "./data";

function App() {
  const [taskArray, setTaskArray] = useState(tasks);
  const [activeTasks, setActiveTasks] = useState();
  const [finishedTasks, setFinishedTasks] = useState();

  console.log(taskArray.length);

  return (
    <div className="App">
      <Header />
      <main>
        {bloks.map((type) => {
          const filtredTaskArray = taskArray.filter(
            (task) => task.status === type
          );
          return (
            <Taskblock
              key={type}
              blockName={type}
              filterdTaskArray={filtredTaskArray}
              taskArray={taskArray}
              setTaskArray={setTaskArray}
              // activeTasks={activeTasks}
              // finishedTasks={finishedTasks}
            />
          );
        })}
      </main>
      <Footer activeCount={activeTasks} finishedCount={finishedTasks} />
    </div>
  );
}

export default App;
