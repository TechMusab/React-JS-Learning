import "./App.css";
import Fooditems from "./components/fooditems";
import Errormsg from "./components/errormsg";
import Container from "./components/container";
function App() {
  let show="value";
  const handlechange=(e)=>{
    console.log(e.target.value);
    show=e.target.value;
  }
  
  let fooditems = ["Daal", "Green Vegetables", "Roti", "Milk", "Salad", "Ghee"];
  // let fooditems =[];
  return (
    <>
   < Container>
      <h1 className="foodheading">Healthy Foods</h1>
      <input type="text" onChange={handlechange} />
      <p>{show}</p>
      <Errormsg items={fooditems}></Errormsg>
      <Fooditems items={fooditems}></Fooditems>
    </Container> 
   < Container>
      <h1 className="foodheading">Healthy Foods</h1>
      <Errormsg items={fooditems}></Errormsg>
      <Fooditems items={fooditems}></Fooditems>
    </Container> 
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
// COntiner components accepting its children as props children
//cannot dynamicaly change the inner text of componets once painted 
// we have to use states for this
// cannot add the value dynamicallly once painted on on change 