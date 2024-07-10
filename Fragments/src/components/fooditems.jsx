import PropTypes from 'prop-types'; 
import Item from "./item";
const Fooditems=({items})=>{
return(
    <ul className="list-group">
    {items.map((item)=>(
        <Item key={item} FoodItem={item}></Item>
    ))}
    </ul>
);
}
Fooditems.propTypes = {
    items: PropTypes.array.isRequired, 
  };
export default Fooditems;