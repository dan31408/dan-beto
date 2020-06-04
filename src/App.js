import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/mainComponent";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <div className="text-success">
        <Navbar>
          <NavbarBrand>
            <h4>Dan Beto || Web Developer</h4>
          </NavbarBrand>
        </Navbar>
      </div>
      <Main />
    </div>
  );
}



export default App;
