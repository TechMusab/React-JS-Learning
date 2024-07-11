import styles from './todoitem.module.css'; 


function Todoitem({todonme,tododate}) {
  return (
    <div className={styles.item}>
      <p>{todonme}</p>
      <p>{tododate}</p>
      <button>Delete</button>
    </div>
  );
}
export default Todoitem;
