import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from "react";
import { Postlist as Mypostlist } from "../store/postsliststore";
const Post = ({ post }) => {
  const { deletepost } = useContext(Mypostlist);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {post.postTitle}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletepost(post.id)}
          >
            <FaDeleteLeft />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.hashtags.map((hashtag) => {
          return (
            <a href="#" key={hashtag} className="btn btn-primary">
              {hashtag}
            </a>
          );
        })}
        <div className="alert alert-success reactions" role="alert">
          This post has been recated by {post.reactions} people
        </div>
      </div>
    </div>
  );
};
export default Post;
