import "./App.css";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todocontainer from "./components/todoitemcontainer";
import { useState } from "react";
//when you dont want ui repainting use useref hook
//used directly in jsx components
//understand break the app into components
function App() {
  let [todoitem, settodoitem] = useState([]);
  const addtodoitem = (text, date) => {
    //functionl update if my current value depends upon previous value
    settodoitem(oldvalue =>[...oldvalue, { name: text, date: date }]);
  };
  const deletetodo = (index) => {
    let newarray = todoitem.filter((_, idx) => idx !== index);
    settodoitem(newarray);
  };
  return (
    <center>
      <AppName></AppName>
      <Addtodo add={addtodoitem}></Addtodo>
      <Todocontainer
        deletetodo={deletetodo}
        todoitem={todoitem}
      ></Todocontainer>
    </center>
  );
}
export default App;
