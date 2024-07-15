import { createContext } from "react";
import { useReducer } from "react";


export const Postlist = createContext({
  mypostlist: [],
  addpost: () => {},
  deletepost: () => {},
});
const reducer = (mypostlist, action) => {
  let newpostlist = mypostlist;
  if (action.type === "DELETE_POST") {
   newpostlist= newpostlist.filter((post) => post.id !== action.payload);
  }
  else if (action.type === "ADD_POST") {
    newpostlist = [...mypostlist, action.payload];
  }
  else if (action.type === "ALL_POST") {
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
  const getallposts=(posts)=>{
    console.log("clicked");
    console.log(posts.posts);
    dispatchmypostlist({
      type: "ALL_POST",
      payload: posts.posts,
    });
  }
  return (
    <Postlist.Provider value={{ mypostlist, addpost, deletepost,getallposts }}>
      {props.children}
    </Postlist.Provider>
  );
};

export default Postlistprovider;
