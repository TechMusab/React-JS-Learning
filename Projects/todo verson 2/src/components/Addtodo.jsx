import styles from "./addtodo.module.css";
import { useRef } from "react";

function Addtodo({ add }) {
  let text = useRef();
  let date = useRef();
  const handleclick=()=>{
    add(text.current.value,date.current.value);
    text.current.value = "";
    date.current.value = "";
  }
  return (
    <div className={styles.inputcontainer}>
      <input ref={text} type="text" />
      <input ref={date} type="date" />
      <button onClick={handleclick} className={styles.add}>
        {" "}
        Add
      </button>
    </div>
  );
}
export default Addtodo;
