import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home"; // Import your home component
import About from "./components/About"; // Import your about component
import Contact from "./components/Contact"; // Import your contact component
import "./App.css";
import Item from "./MyItem";
import { Auth } from "./components/auth";

function App() {
  return (
    <>
      <div>
        <Auth />
        
      </div>
      <Router>
        <div>
          <NavBar>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </NavBar>
        </div>
      </Router>

      {/* component one */}
      <div>
        {/* Add a route for the item */}
        <Item name="Gully" />
        <Item name="Lucy" />
        <Item name="Rayan" />
      </div>
    </>
  );
}

export default App;
