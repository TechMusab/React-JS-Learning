import PropTypes from 'prop-types'; 
import styles from './item.module.css';
const Item=({FoodItem,handleclick,className})=>{
return (
    <li onClick={handleclick} className={`${styles["my-item"]} list-group-item ${className}`}>{FoodItem}</li>
);
}
Item.propTypes = {
    FoodItem: PropTypes.string.isRequired, 
  };
export default Item;
//understanding CSS Modules for indepenedent styling of elements