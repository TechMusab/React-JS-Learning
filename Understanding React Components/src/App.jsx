
// import{MyBtn} from './button';
import MyBtn from './button'; // Ensure correct case and path

/*
Component 
Class component vs function components
class component not popular now(can manage state)
use functional components easy to use (initially stateless)
*/

function App() {
  let name="musab";
  let myname=()=>{
    return "musab Ubaid";
  }
  //can use js in {}
  return <div>
      <h1>Hello World {myname()}</h1>
      <MyBtn></MyBtn>
      <MyBtn></MyBtn>
      <MyBtn></MyBtn>
      <MyBtn></MyBtn>
    </div>;
    //reuseble components
  // This is not HTML code Although looking like HTML but actually JSX code which eventually converted into JavaScript.
}

// this is my component which used by main.jsx as JSX tag to display the component 

export default App;

