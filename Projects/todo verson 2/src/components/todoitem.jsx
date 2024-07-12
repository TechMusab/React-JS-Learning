import styles from './todoitem.module.css'; 


function Todoitem({todonme,tododate,deletetodoo}) {
  return (
    <div className={styles.item}>
      <p>{todonme}</p>
      <p>{tododate}</p>
      <button onClick={deletetodoo}>Delete</button>
    </div>
  );
}
export default Todoitem;
