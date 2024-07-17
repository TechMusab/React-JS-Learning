import { createStore } from "redux";
const Intial = {
  count: 0,
  privacy: false,
};
function reducer(store = Intial, action) {
  if (action.type == "increase") {
    return {
      //New state object
      ...store,
      count: store.count + 1,
      //use spread operator to copy the old state and update the new state
    };
  } else if (action.type == "decrease") {
    return {
      ...store,
      count: store.count - 1,
    };
  } else if (action.type == "add") {
    return {
      ...store,
      count: store.count + Number(action.payload.num),
    };
  } else if (action.type == "subtract") {
    return {
      ...store,
      count: store.count - Number(action.payload.num),
    };
  } else if (action.type == "privacy") {
    return { ...store, privacy: !store.privacy };
  }

  return store;
}
export const store = createStore(reducer);
//subscrition is already setup using useSelector in react
//problem face when i am changing value the other value not passed so unexpected results happen so you pass all the other values 