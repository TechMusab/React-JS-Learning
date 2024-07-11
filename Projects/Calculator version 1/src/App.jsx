import "./App.css";
import Display from "./components/display";
import Mainbuttons from "./components/mainbuttons";
function App() {
  let array = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="calcontainer">
      <Display></Display>
      <Mainbuttons array={array}></Mainbuttons>
    </div>
  );
}

export default App;
