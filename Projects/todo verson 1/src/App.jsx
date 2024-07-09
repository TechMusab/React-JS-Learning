import "./App.css";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todoitem from "./components/todoitem";

//understand break the app into components
function App() {
  return (
    <center>
  
        <AppName></AppName>
      
          <Addtodo></Addtodo>
          <div className="itemcontainer">
          <Todoitem></Todoitem>
          </div>
    </center>
  );
}
export default App;
