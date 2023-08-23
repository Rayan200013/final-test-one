import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home"; // Import your home component
import About from "./components/About"; // Import your about component
import Contact from "./components/Contact"; // Import your contact component
import "./App.css";
// import { Storage } from "./config/firebase";
// import Item from "./MyItem";
// import { Auth } from "./components/auth";
import StarWars from "./components/StarWars";

function App() {
  return (
    <>
      <div>
        <NavBar>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Router>
        </NavBar>
      </div>

      {/* component one */}
      <div>
        {/* Add a route for the item */}
        {/* <Item name="Gully" />
        <Item name="Lucy" />
        <Item name="Rayan" /> */}
      </div>

      <div className="App">
        <StarWars />
      </div>

      {/* <div>
        <Auth />
      </div> */}
    </>
  );
}

export default App;
