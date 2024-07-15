import { useContext } from "react"
import { Postlist as Mypostlist } from "../store/postsliststore";
import Post from "./post"
import Welcome from "./welcomemsg";
const Postlist=()=>{
    const {mypostlist} = useContext(Mypostlist);
    return <>
    {mypostlist.length==0 && <Welcome />}
    {mypostlist.map((post)=>{
        return <Post key={post.id} post={post}></Post>
    })}
    </>

} 
export default Postlist