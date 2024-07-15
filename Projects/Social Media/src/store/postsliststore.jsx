import { createContext } from "react";
import { useReducer } from "react";
const defaultPosts = [
  {
    id: 1,
    userId: 101,
    postTitle: "Exploring the Mountains",
    body: "Had an amazing time hiking in the Rocky Mountains. The view from the top was breathtaking!",
    reactions: 12,
    hashtags: ["#hiking", "#mountains", "#adventure"],
  },
  {
    id: 2,
    userId: 102,
    postTitle: "Delicious Homemade Pizza",
    body: "Tried a new pizza recipe today. Homemade dough and fresh ingredients make all the difference!",
    reactions: 118,
    hashtags: ["#cooking", "#pizza", "#foodie"],
  },
  {
    id: 3,
    userId: 103,
    postTitle: "JavaScript Tips and Tricks",
    body: "Just published a new blog post on some lesser-known JavaScript tips and tricks. Check it out!",
    reactions: 17,
    hashtags: ["#javascript", "#programming", "#webdevelopment"],
  },
];

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
  return newpostlist;
};
const Postlistprovider = (props) => {
  const [mypostlist, dispatchmypostlist] = useReducer(reducer, defaultPosts);
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
  return (
    <Postlist.Provider value={{ mypostlist, addpost, deletepost }}>
      {props.children}
    </Postlist.Provider>
  );
};

export default Postlistprovider;
