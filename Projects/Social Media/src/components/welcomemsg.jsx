import { useContext } from "react";
import { Postlist as Mypostlist } from "../store/postsliststore";
const Welcome = () => {
  const { getallposts } = useContext(Mypostlist);
  const handlegetallposts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data=>getallposts(data));
  };
  return (
    <center>
      <h1>No Posts Yet! Come here later</h1>;
      <button
        onClick={handlegetallposts}
        type="button"
        className="btn btn-primary"
      >
        Fecth Posts from server
      </button>
    </center>
  );
};
export default Welcome;
