import { useSelector } from "react-redux";

const Displaycounter = () => {
    //agar counter mai change ho to hi muje batana
   const {value}= useSelector(store=>store.counter)
  return <p className="lead mb-4">Counter Value: {value}</p>;
};
export default Displaycounter;
//just like context API