import "./App.css";
import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todocontainer from "./components/todoitemcontainer";
import Todoitemprovider from "./store/todoitemcontext";
//when you dont want ui repainting use useref hook
//used directly in jsx components
//understand break the app into components
/*
named import use braces
default import not use braces
 */

function App() {
return (
    <Todoitemprovider>
      <center>
        <AppName></AppName>
        <Addtodo></Addtodo>
        <Todocontainer></Todocontainer>
      </center>
    </Todoitemprovider>
  );
}
//understanding
/*
when todoitemprovider renders and replaces it self with return statement of it then when add button is clicked dd ftn calls then dispatcher of reducer hook updates the state and then whole app rerenders
 */
export default App;
//disadvantage of contxt hook is that then whole ui repaints
