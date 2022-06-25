import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Property from "./components/Property";
export default function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route exact path={"/"} element={<Login />}></Route>
    //       <Route exact path={"/login"} element={<Login />}></Route>

    //       <Route exact path={"/signup"} element={<Signup />}></Route>
    //     </Routes>
    //   </div>
    // </Router>
    <div className="m-10 max-h-screen">
      <Property />
    </div>
  );
}
