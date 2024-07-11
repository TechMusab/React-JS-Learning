import styles from './addtodo.module.css';


function Addtodo(){
    return  <div className={styles.inputcontainer}>
    <input type="text" />
    <input type="date" />
    <button className={styles.add}> Add</button>
    </div>
    
}
export default Addtodo;