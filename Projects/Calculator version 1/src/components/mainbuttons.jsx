import Mybtn from "./button";

function Mainbuttons({ array }) {
  return (
    <div className="btncontainer">
      {array.map((item) => (
        <Mybtn key={item} item={item}></Mybtn>
      ))}
    </div>
  );
}
export default Mainbuttons;
