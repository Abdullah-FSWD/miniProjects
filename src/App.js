import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Components/Counter/Counter";
import { StopWatch } from "./Components/Stopwatch";
import { FakeStore } from "./Components/FakeStore/FakeStore";

function App() {
  return (
    <div className="App">
      <Counter />
      <StopWatch />
      <FakeStore />
    </div>
  );
}

export default App;
