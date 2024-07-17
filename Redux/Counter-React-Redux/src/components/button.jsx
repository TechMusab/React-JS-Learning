import { useRef } from "react";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();
  const input=useRef();
  const Increase = () => {
    dispatch({
      type: "increase",
    });
  };
  const decrease = () => {
    dispatch({
      type: "decrease",
    });
  };
  const handleadd = () => {
    dispatch({
      type: "add",
      payload:{
        num:input.current.value,
      }
    });
    input.current.value =" ";
  };
  const handlesubtract = () => {
    dispatch({
      type: "subtract",
      payload:{
        num:input.current.value,
      }
    });
    input.current.value =" ";
  };
  const handleprivacy=()=>{
    dispatch({
      type:"privacy",
    });
  }
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={Increase}>
       +1
      </button>
      <button type="button" className="btn btn-success" onClick={decrease}>
      -1
      </button>
      <button type="button" className="btn btn-warning" onClick={handleprivacy}>
       Privacy Toggle
      </button>
      <input ref={input} type="text" placeholder="Enter Number" />
      <button className="btn btn-info" onClick={handleadd}>Add</button>
      <button className="btn btn-danger" onClick={handlesubtract}>Subtract</button>
    </div>
  );
};
export default Button;
//when actions dispatched the ruducer ftn automatically gets the dispatched ftn
