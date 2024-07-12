import Mybtn from "./button";

function Mainbuttons({ array,handleclick }) {
  return (
    <div className="btncontainer">
      {array.map((item) => (
        <Mybtn handleclick={handleclick} key={item} item={item}></Mybtn>
      ))}
    </div>
  );
}
export default Mainbuttons;
