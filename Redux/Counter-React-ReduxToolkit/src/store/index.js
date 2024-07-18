// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
// const Intial = {
//   count: 0,
//   privacy: false,
// };
// function reducer(store = Intial, action) {
//   if (action.type == "increase") {
//     return {
//       //New state object
//       ...store,
//       count: store.count + 1,
//       //use spread operator to copy the old state and update the new state
//     };
//   } else if (action.type == "decrease") {
//     return {
//       ...store,
//       count: store.count - 1,
//     };
//   } else if (action.type == "add") {
//     return {
//       ...store,
//       count: store.count + Number(action.payload.num),
//     };
//   } else if (action.type == "subtract") {
//     return {
//       ...store,
//       count: store.count - Number(action.payload.num),
//     };
//   } else if (action.type == "privacy") {
//     return { ...store, privacy: !store.privacy };
//   }

//   return store;
// }
// export const store = createStore(reducer);
//subscrition is already setup using useSelector in react
//problem face when i am changing value the other value not passed so unexpected results happen so you pass all the other values 
const counterSlice=createSlice({
  name:"counter",
  initialState:{value:0},
  reducers:{
    increase:(state)=>{
      state.value=state.value+1;
     //state.value++;
    },
    decrease:(state)=>{
      state.value=state.value+1;
     //state.value--;
    },
    add:(state,action)=>{
      state.value+=Number(action.payload)
    },
    subtract:(state,action)=>{
     state.value-=Number(action.payload)
    }
  }
})
const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacy: (state) => {
      return !state;
    },
  },
});

const store=configureStore({
  reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer,
  }
})
export const counterActions=counterSlice.actions;
export const privacyActions=privacySlice.actions;
export default store;

/*
In Redux Toolkit, when using the createSlice function, you can mutate the state directly inside the reducer functions. This is possible because Redux Toolkit uses Immer under the hood, which allows you to write "mutating" code that internally creates a new state object instead of mutating the existing state directly.

When you use state.value++, you're directly mutating the state, which Immer handles correctly. However, when you use state.value + 1, you're not actually mutating the state; you're just performing an operation and returning the result, which doesn't change the state object.
 */
//understnding you cannot d state.value+1 because we are not storing it just 
//doing an opertion
//access the slice by name that is useSelector(store=>store.nameofslice (its intial value))