import { useContext } from "react";
import styles from "./todoitem.module.css";
import { Todoitemcontext } from "../store/todoitemcontext";

function Todoitem({ todonme, tododate }) {
  const obj = useContext(Todoitemcontext);
  const deletetodoo = obj.deletetodo;
  return (
    <div className={styles.item}>
      <p>{todonme}</p>
      <p>{tododate}</p>
      <button onClick={()=>deletetodoo(todonme)}>Delete</button>
    </div>
  );
}
export default Todoitem;
