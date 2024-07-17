import "./App.css";
import Heading from "./components/heading";
import Button from "./components/button";
import Displaycounter from "./components/displaycounter";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (

      <div className="px-4 py-5 my-5 text-center">
        <Heading></Heading>
        <div className="col-lg-6 mx-auto">
          <Displaycounter></Displaycounter>
          <Button></Button>
        </div>
      </div>

  );
}

export default App;
