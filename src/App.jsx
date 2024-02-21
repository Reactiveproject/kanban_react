import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Taskblock from "./components/Taskblock/Taskblock";
import { bloks, tasks } from "./data";

function App() {
  const [taskArray, setTaskArray] = useState(tasks);

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
            />
          );
        })}
      </main>
      <Footer activeCount="10" finishedCount="19" />
    </div>
  );
}

export default App;
