import { useSelector } from "react-redux";

const Displaycounter = () => {
    //agar counter mai change ho to hi muje batana
   const counter= useSelector(store=>store.count)
  return <p className="lead mb-4">Counter Value: {counter}</p>;
};
export default Displaycounter;
//just like context API