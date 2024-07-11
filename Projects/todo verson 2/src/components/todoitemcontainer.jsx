
import Todoitem from "./todoitem";


function Todocontainer({todoitems}) {

  return (
    <div>
    {todoitems.map(item=>
    <Todoitem key={item.name} todonme={item.name} tododate={item.dueDate}></Todoitem>)}
     </div>
  );
}
export default Todocontainer;
