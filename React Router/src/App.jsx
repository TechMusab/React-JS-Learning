import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Createpost from "./components/createpost";
import Postlist from "./components/postlist";
import { useState } from "react";
import Postlistprovider from "./store/postsliststore";
function App() {
  const [tab,settab]=useState("home");
  const handlehometab = () => {
      settab("home");
  }
  const handleposttab = () => {
      settab("createpost");
  }
  return (
    <>
    <Postlistprovider>
      <Header></Header>
      <div className="mycontainer">
        <div className="formcontainer">
          <Sidebar selectedtab={tab} handlehometab={handlehometab} handleposttab={handleposttab}> </Sidebar>
          <div className="postcontainer">
          {tab==="home" ?  <Createpost></Createpost> : <Postlist></Postlist> }
          </div>
        </div>
        <Footer></Footer>
      </div>
      </Postlistprovider>
    </>
  );
}

export default App;
