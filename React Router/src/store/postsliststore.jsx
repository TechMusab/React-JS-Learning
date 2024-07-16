import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

export const Postlist = createContext({
  mypostlist: [],
  addpost: () => {},
  deletepost: () => {},
});
const reducer = (mypostlist, action) => {
  let newpostlist = mypostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = newpostlist.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_POST") {
    newpostlist = [...mypostlist, action.payload];
  } else if (action.type === "ALL_POST") {
    newpostlist = action.payload;
  }
  return newpostlist;
};
const Postlistprovider = (props) => {
  const [mypostlist, dispatchmypostlist] = useReducer(reducer, []);
  console.log(mypostlist);
  const addpost = (newpost) => {
    dispatchmypostlist({
      type: "ADD_POST",
      payload: newpost,
    });
  };
  const deletepost = (postid) => {
    dispatchmypostlist({
      type: "DELETE_POST",
      payload: postid,
    });
  };
  const getallposts = (posts) => {
    dispatchmypostlist({
      type: "ALL_POST",
      payload: posts,
    });
  };
  //use effect hookk
  //jab component unmount ho raha hoga tab useeffect ka  return ftn call hoga
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        getallposts(data.posts);
        setloader(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <Postlist.Provider value={{ mypostlist, addpost, deletepost, loader }}>
      {props.children}
    </Postlist.Provider>
  );
};

export default Postlistprovider;
//understanding loader is setting to true and it pass to childern postlist length is zero intially so it wil go to welcome msg print loader when promsie fulfilled the posts got and it will immednitely rerender and then psotlistlengthis not zero to to postlist and show all psot
