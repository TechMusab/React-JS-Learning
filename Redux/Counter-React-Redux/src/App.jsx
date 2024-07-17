import "./App.css";
import Heading from "./components/heading";
import Button from "./components/button";
import Displaycounter from "./components/displaycounter";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Privacymsg from "./components/msg";
function App() {
  const privacy=useSelector(store=>store.privacy);
  return (

      <div className="px-4 py-5 my-5 text-center">
        <Heading></Heading>
        <div className="col-lg-6 mx-auto">
          {privacy?<Privacymsg></Privacymsg> :<Displaycounter></Displaycounter>}
          <Button></Button>
        </div>
      </div>

  );
}

export default App;
