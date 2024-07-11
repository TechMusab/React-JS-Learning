import PropTypes from 'prop-types'; 
import Item from "./item";
const Fooditems=({items})=>{
return(
    <ul className="list-group">
    {items.map((item)=>(
        <Item handleclick={(event)=>{console.log("clicked");console.log(event)}} key={item} FoodItem={item}></Item>
    ))} 
    </ul>
);
}
Fooditems.propTypes = {
    items: PropTypes.array.isRequired, 
  };
export default Fooditems;
//can pass ftns via props
//pass dynmic behviour b/w components
//enables child to parent communication
//prent ki zimadari h k behvioures ko handle krna
