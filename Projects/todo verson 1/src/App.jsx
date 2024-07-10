import "./App.css";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todocontainer from "./components/todoitemcontainer";

//understand break the app into components
function App() {
  return (
    <center>
        <AppName></AppName>
        <Addtodo></Addtodo>
        <Todocontainer></Todocontainer>
    </center>
  );
}
export default App;
