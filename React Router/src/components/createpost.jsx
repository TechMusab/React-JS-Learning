import { useRef } from "react";
import { Postlist as Mypostlist } from "../store/postsliststore";
import { useContext } from "react";

const Createpost = () => {
  const { addpost } = useContext(Mypostlist);
  const userid = useRef();
  const title = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();
  const handlesubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userid.current.value,
        title: title.current.value,
        body: body.current.value,
        reactions: {
          likes: reactions.current.value,
          dislikes: reactions.current.value,
        },
        tags: tags.current.value.split(" "),
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addpost(post);
      });
    userid.current.value = "";
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
  };
  return (
    <form className="createpost" onSubmit={handlesubmit}>
      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">
          User id
        </label>
        <input
          ref={userid}
          type="text"
          className="form-control"
          id="userid"
          placeholder="Enter your user id"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={title}
          type="text"
          className="form-control"
          id="title"
          placeholder="Whats on your mind?"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          ref={reactions}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="Enter reactions"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tags}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={body}
          type="text"
          className="form-control"
          id="body"
          placeholder="Share your thoughts here"
          rows="10"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default Createpost;
