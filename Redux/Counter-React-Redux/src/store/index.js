import { createStore } from "redux";
const Intial = {
  count: 0,
};
function reducer(store = Intial, action) {
  if (action.type == "increase") {
    return {
        //New state object
      count: store.count + 1,
    };
  } else if (action.type == "decrease") {
    {
      return {
        count: store.count - 1,
      };
    }
  }
  console.log("Invalid action");
  return store;
}
export const store = createStore(reducer);
//subscrition is already setup using useSelector in react
