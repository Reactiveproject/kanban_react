import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Taskblock from "./components/Taskblock/Taskblok";

function App() {
  // const dataMock = [
  //   {
  //     title: "backlog",
  //     issues: [
  //       {
  //         id: "12345",
  //         name: "Sprint bugfix",
  //         description: "Fix all the bugs",
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="App">
      <Header />
      <main>
        <Taskblock blockName="Backlog" />
        <Taskblock blockName="Backlog" />
        <Taskblock blockName="Backlog" />
        <Taskblock blockName="Backlog" />
      </main>
      <Footer activeCount="10" finishedCount="19" />
    </div>
  );
}

export default App;
