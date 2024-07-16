import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Postlistprovider from "./store/postsliststore";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
    <Postlistprovider>
      <Header></Header>
      <div className="mycontainer">
        <div className="formcontainer">
          <Sidebar  > </Sidebar>
          <div className="postcontainer">
          <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
      </Postlistprovider>
    </>
  );
}

export default App;
