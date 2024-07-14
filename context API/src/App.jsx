import "./App.css";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todocontainer from "./components/todoitemcontainer";
import { useReducer } from "react";
import { Todoitemcontext } from "./store/todoitemcontext";
//when you dont want ui repainting use useref hook
//used directly in jsx components
//understand break the app into components
const todoitemsreducer = (state, action) => {
  let newstate = state;
  if (action.type === "ADD") {
    newstate = [
      ...state,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE") {
    newstate = state.filter((item) => item.name !== action.payload.name);
  }
  return newstate;
};

function App() {
  // let [todoitem, settodoitem] = useState([]);
  let [todoitem, dispatchtodoitem] = useReducer(todoitemsreducer, []);
  const addtodoitem = (name, date) => {
    const newaction = {
      type: "ADD",
      payload: {
        name: name,
        date: date,
      },
    };
    dispatchtodoitem(newaction);
    //functionl update if my current value depends upon previous value
  };
  const deletetodo = (name) => {
    const newaction = {
      type: "DELETE",
      payload: {
        name: name,
      },
    };
    dispatchtodoitem(newaction);
  };
  return (
    <Todoitemcontext.Provider
      value={{ todoitem: todoitem, add: addtodoitem, deletetodo: deletetodo }}
    >
      <center>
        <AppName></AppName>
        <Addtodo></Addtodo>
        <Todocontainer></Todocontainer>
      </center>
    </Todoitemcontext.Provider>
  );
}
export default App;
//disadvantage of contxt hook is that then whole ui repaints
