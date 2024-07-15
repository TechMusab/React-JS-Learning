import { useContext, useEffect, useState } from "react";
import { Postlist as Mypostlist } from "../store/postsliststore";
import Loader from "./loader";
const Welcome = () => {
  const { getallposts } = useContext(Mypostlist);
  //use effect hookk
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {getallposts(data.posts);
        setloader(false);
      });

  }, []);
  return (
    <center>
      {loader && <Loader />}
     {!loader && <h1>No Posts Yet! Come here later</h1>};
    </center>
  );
};
export default Welcome;
