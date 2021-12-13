import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Bread from "./components/bread";
import Footer from "./components/footer";
import Body from "./components/body"
function App() {
  return (
    <>
    <Navbar /> 
      <div class="container" >
      <div class="container mt-3" >
      </div>
      <Bread/>
      <Body />
      </div>
      <Footer></Footer>
  </>

  );
}

export default App;
