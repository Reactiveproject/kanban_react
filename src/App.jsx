import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { bloks, tasks } from "./data";
import Main from "./components/Main/Main";

function App() {
  const [taskArray, setTaskArray] = useState(tasks);
  const [activeTasks, setActiveTasks] = useState();
  const [finishedTasks, setFinishedTasks] = useState();

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main taskArray={taskArray} setTaskArray={setTaskArray} bloks={bloks} />
        <Footer activeCount={activeTasks} finishedCount={finishedTasks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
