import "./App.css";
import Fooditems from "./components/fooditems";
import Errormsg from "./components/errormsg";
function App() {
  let fooditems = ["Daal", "Green Vegetables", "Roti", "Milk", "Salad", "Ghee"];
  // let fooditems =[];
  return (
    <>
      <h1 className="foodheading">Healthy Foods</h1>
      <Errormsg items={fooditems}></Errormsg>
      <Fooditems items={fooditems}></Fooditems>
    </>
  );
}
export default App;
// must be wrapped into one parent to return
//don't use div
//use fragment allow grouping of multile elements withour extra DOM Nodes
// shortcut <></> or <React.Fragment></React.Fragment>
//Map renders list from array data
//Modern react asks that every item in list should have unique id(key props)
//Adds the key only in virtul DOM
//    {fooditems.length==0 && <h3>Hungry</h3>} checks if condito true returs the next value otherwise returns the else part
//React also helps us to avoid unnessry rehndering
