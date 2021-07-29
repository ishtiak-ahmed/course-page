import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/App.scss";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
