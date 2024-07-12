import styles from './addtodo.module.css';

function Addtodo({onchangetext,onchangedate,add}){
    return  <div className={styles.inputcontainer}>
    <input onChange={onchangetext} type="text" />
    <input onChange={onchangedate} type="date" />
    <button onClick={add} className={styles.add}> Add</button>
    </div>
    
}
export default Addtodo;