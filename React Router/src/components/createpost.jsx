import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";

const Createpost = () => {
  //  const { addpost } = useContext(Mypostlist);
  // const navigate=useNavigate();

  // const handlesubmit = (e) => {
  // }
  return (
    <Form method="POST" className="createpost">
      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">
          User id
        </label>
        <input
          name="userId"
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
          name="title"
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
          name="reactions"
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
          name="tags"
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
          name="body"
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
    </Form>
  );
};
export async function Createpostaction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/createpost");
}
export default Createpost;
//understanding of action of forms and react routers