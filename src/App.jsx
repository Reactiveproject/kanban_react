import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { tasks } from "./data";
import Main from "./components/Main/Main";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [taskArray, setTaskArray] = useLocalStorage("task", tasks);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main taskArray={taskArray} setTaskArray={setTaskArray} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
