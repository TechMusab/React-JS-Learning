import { useState } from "react";
import "./App.css";
import Display from "./components/display";
import Mainbuttons from "./components/mainbuttons";
import { evaluate } from "mathjs";
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
  let [display, setdisplay] = useState("");
  const handleclick = (e) => {
    if (e.target.innerText === "C") {
      setdisplay("");
    } else if (e.target.innerText !== "=") {
      const num = e.target.innerText;
      setdisplay((prevDisplay) => prevDisplay + num);
    } else {
      try {
        console.log("Invalid");
        let result = evaluate(display);
        console.log(result);
        setdisplay(result);
        setTimeout(() => {
          setdisplay("");
        }, 3000);
      } catch (error) {
        alert("Please enter the valid input");
      }
    }
  };
  return (
    <div className="calcontainer">
      <Display input={display}></Display>
      <Mainbuttons handleclick={handleclick} array={array}></Mainbuttons>
    </div>
  );
}

export default App;
