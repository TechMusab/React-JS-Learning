import "./App.css";
import Fooditems from "./components/fooditems";
import Errormsg from "./components/errormsg";
import Container from "./components/container";
import { useState } from "react";
function App() {
// Now using states
//This is array destructuring
/*
useState is a React hook that allows you to add state to functional components. When you call useState, it returns an array with two elements:
The current state value.
A function that updates the state.
 */
let [fooditems,setfooditems]  =useState([]);
  // let fooditems =[];
  //state is considered as immutable so make new array and pass value to it
  const handlechange = (e) => {
    console.log(e);
    if(e.key=== "Enter"){
      console.log(e.target.value)
      let newarray=[...fooditems,e.target.value]
      setfooditems(newarray);
      e.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h1 className="foodheading">Healthy Foods</h1>
        <input type="text" onKeyDown={handlechange} />
        <Errormsg items={fooditems}></Errormsg>
        <Fooditems items={fooditems}></Fooditems>
      </Container>
      <Container>
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
