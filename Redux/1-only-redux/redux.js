const redux = require("redux");
const INITIAL_VALUE = {
  counter: 0,
};
const reducer = (store = INITIAL_VALUE, action) => {
  if (action.type == "INC") {
    return { counter: store.counter + 1 };
  } else if (action.type == "DEC") {
    return { counter: store.counter - 1 };
  }
};
const store = redux.createStore(reducer);
const subscriber = () => {
  console.log(store.getState());
};
store.subscribe(subscriber);
store.dispatch({
  type: "INC",
});
store.dispatch({
  type: "INC",
});
store.dispatch({
  type: "INC",
});
store.dispatch({
  type: "DEC",
});
store.dispatch({
  type: "DEC",
});
