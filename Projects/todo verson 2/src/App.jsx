import "./App.css";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todocontainer from "./components/todoitemcontainer";
import { useState } from "react";

//understand break the app into components
function App() {
  let [text, settext] = useState("");
  let [date, setdate] = useState("");
  let [todoitem, settodoitem] = useState([]);
  const onchangetext = (event) => {
    settext(event.target.value);
  };
  const onchangedate = (event) => {
    setdate(event.target.value);
  };
  const addtodoitem=(event)=>{
    let newtodoitem={name:text, date:date};
    let newarray=[...todoitem,newtodoitem];
    settodoitem(newarray);
  }
  const deletetodo=(index)=>{
    let newarray = todoitem.filter((_,idx) => idx !== index);
    settodoitem(newarray);
  }
  return (
    <center>
      <AppName></AppName>
      <Addtodo
        onchangetext={onchangetext}
        onchangedate={onchangedate}
        add={addtodoitem}
      ></Addtodo>
      <Todocontainer deletetodo={deletetodo} todoitem={todoitem}></Todocontainer>
    </center>
  );
}
export default App;
