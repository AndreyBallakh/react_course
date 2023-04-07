import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route, Switch, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
        <Navigate to='/posts' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
