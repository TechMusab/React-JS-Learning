import "./App.css";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todocontainer from "./components/todoitemcontainer";

//understand break the app into components
function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      dueDate: "2/3/2024",
    },
    {
      name: "Go to College",
      dueDate: "2/3/2024",
    },
    {
      name: "Buy Order",
      dueDate: "2/3/2024",
    },
  ];
  return (
    <center>
        <AppName></AppName>
        <Addtodo></Addtodo>
        <Todocontainer todoitems= {todoitems}></Todocontainer>
    </center>
  );
}
export default App;
