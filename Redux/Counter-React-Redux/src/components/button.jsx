import { useDispatch } from "react-redux";

const Button = () => {

const dispatch=useDispatch();
const Increase=()=>{
dispatch({
  type: "increase",

})
}
const decrease=()=>{
  dispatch({
    type: "decrease",
  })
}
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-primary" onClick={Increase}>
       Increase Counter
      </button>
      <button type="button" className="btn btn-success" onClick={decrease}>
       Decrease Counter
      </button>

    </div>
  );
};
export default Button;
//when actions dispatched the ruducer ftn automatically gets the dispatched ftn
