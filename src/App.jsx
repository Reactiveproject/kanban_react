import React from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Taskblock from "./components/Taskblock/Taskblock";

function App() {
  const dataMock = [
    {
      title: "backlog",
      issues: [
        {
          id: "12345",
          name: "Sprint bugfix",
          description: "Fix all the bugs",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Taskblock blockName="Backlog" />
        <Taskblock blockName="Ready" />
        <Taskblock blockName="In Progress" />
        <Taskblock blockName="Finished" />
      </main>
      <Footer activeCount="10" finishedCount="19" />
    </div>
  );
}

export default App;
