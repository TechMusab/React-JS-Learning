import { Todoitemcontext } from "../store/todoitemcontext";
import { useContext } from "react";
import Todoitem from "./todoitem";

function Todocontainer() {
  const obj = useContext(Todoitemcontext);
  const todoitem = obj.todoitem;
  return (
    <div>
      {todoitem.map((item, index) => (
        <Todoitem
          key={index}
          todonme={item.name}
          tododate={item.date}
        ></Todoitem>
      ))}
    </div>
  );
}
export default Todocontainer;
//understanding
/*
i have defined the ftn deletetodo in App.jsx. and i pssed it s a prop to do continer which is in turn passed as an annoymus ftn to all of its childs.
so when i click the delete btn it invokes the ftn passed as a prop which is in turn invokes the deletetodo(index) which i defiend in App.jsx
It does not go back to App.jsx first; the function reference is already passed down and available directly for invocation in Todocontainer.
 */
