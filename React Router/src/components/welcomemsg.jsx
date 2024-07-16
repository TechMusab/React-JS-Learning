import { useContext, useEffect, useState } from "react";
import { Postlist as Mypostlist } from "../store/postsliststore";
import Loader from "./loader";
const Welcome = () => {
  const { getallposts,loader } = useContext(Mypostlist);

  return (
    <center>
      {loader && <Loader />}
     {!loader && <h1>No Posts Yet! Come here later</h1>};
    </center>
  );
};
export default Welcome;
