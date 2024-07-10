import PropTypes from 'prop-types'; 
import styles from './item.module.css';
const Item=({FoodItem})=>{
return (
    <li className={`${styles["my-item"]}`}>{FoodItem}</li>
);
}
Item.propTypes = {
    FoodItem: PropTypes.string.isRequired, 
  };
export default Item;
//understanding CSS Modules for indepenedent styling of elements