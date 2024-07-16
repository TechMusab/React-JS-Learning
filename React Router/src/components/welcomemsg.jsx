import { useContext, useEffect, useState } from "react";
import { Postlist as Mypostlist } from "../store/postsliststore";
import Loader from "./loader";
const Welcome = () => {
  const { getallposts } = useContext(Mypostlist);
  //use effect hookk
  //jab component unmount ho raha hoga tab useeffect ka  return ftn call hoga
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    const controller= new AbortController();
    const signal= controller.signal
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {getallposts(data.posts);
        setloader(false);
      });
      return ()=>{
        console.log("cleaning up...");
        controller.abort();
      }

  }, []);
  return (
    <center>
      {loader && <Loader />}
     {!loader && <h1>No Posts Yet! Come here later</h1>};
    </center>
  );
};
export default Welcome;
