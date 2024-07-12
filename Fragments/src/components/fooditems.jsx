import PropTypes from "prop-types";
import Item from "./item";
import { useState } from "react";
const Fooditems = ({ items }) => {
  let [color, setcolor] = useState(null);
  let [clickedindex, setclickedindex] = useState(0);
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Item
          className={clickedindex == index ? color : " "}
          handleclick={(event) => {
            console.log(event);
            setclickedindex(index);
            setcolor("active");
          }}
          key={item}
          FoodItem={item}
        ></Item>
      ))}
    </ul>
  );
};
Fooditems.propTypes = {
  items: PropTypes.array.isRequired,
};
export default Fooditems;
//can pass ftns via props
//pass dynmic behviour b/w components
//enables child to parent communication
//prent ki zimadari h k behvioures ko handle krna
