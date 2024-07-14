import { createContext, useReducer } from "react";

 export const Todoitemcontext=createContext();
 const Todoitemprovider=({children})=>{
    const todoitemsreducer = (state, action) => {
        let newstate = state;
        if (action.type === "ADD") {
          newstate = [
            ...state,
            { name: action.payload.name, date: action.payload.date },
          ];
        } else if (action.type === "DELETE") {
          newstate = state.filter((item) => item.name !== action.payload.name);
        }
        return newstate;
      };
      // let [todoitem, settodoitem] = useState([]);
  let [todoitem, dispatchtodoitem] = useReducer(todoitemsreducer, []);
  const addtodoitem = (name, date) => {
    const newaction = {
      type: "ADD",
      payload: {
        name: name,
        date: date,
      },
    };
    dispatchtodoitem(newaction);
    //functionl update if my current value depends upon previous value
  };
  const deletetodo = (name) => {
    const newaction = {
      type: "DELETE",
      payload: {
        name: name,
      },
    };
    dispatchtodoitem(newaction);
  };
  return (
    <Todoitemcontext.Provider
      value={{ todoitem, add: addtodoitem, deletetodo }}
    >
      {children}
    </Todoitemcontext.Provider>
  );
  
 }
 export default Todoitemprovider;