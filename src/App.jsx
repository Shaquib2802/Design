import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/HomePage/Home";
import Page1 from "./Component/Body/Page1/Page1";
import Header1 from "./Component/Header/Header1";
import Body3 from "./Component/Body/Body3";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page1/>} />
        <Route path="/header1" element={<Header1/>} />
        <Route path="/page1" element={<Body3/>} />
      </Routes>
    </Router>
  );
};

export default App;
