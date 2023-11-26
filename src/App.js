import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Home from "./containers/home/Home";
import Paraphaser from "./containers/paraphaser/Paraphaser";
import Grammar from "./containers/grammar/Grammar";
function App() {
  let Component;
  // const [navBarSeleted, setNavBarSelected] = useState(0);
  switch (window.location.pathname) {
    case "/":
    case "/home":
      Component = Home;
      break;
    case "/paraphaser":
      Component = Paraphaser;
      break;
    case "/grammar":
      Component = Grammar;
      break;
    default:
      break;
  }
  return (
    <div className="App">
      <div className="background-container">
        <NavBar></NavBar>
        <div className="content-container">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default App;
