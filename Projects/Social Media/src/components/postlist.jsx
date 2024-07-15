import { useContext } from "react"
import { Postlist as Mypostlist } from "../store/postsliststore";
import Post from "./post"
const Postlist=()=>{
    const {mypostlist} = useContext(Mypostlist);
    return <>
    {mypostlist.map((post)=>{
        return <Post key={post.id} post={post}></Post>
    })}
    </>

}
export default Postlist