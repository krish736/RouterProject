import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Community from "./pages/Community";
import Profile from "./pages/Profile";

function App() {

  const [isLoggedin, setisLoggedin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-black flex flex-col text-white overflow-hidden overflow-y-scroll">
      <Navbar isLoggedin={isLoggedin} setisLoggedin={setisLoggedin}></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setisLoggedin={setisLoggedin} />} />
        <Route path="/signin" element={<Signup setisLoggedin={setisLoggedin} />} />
        <Route path="/Community" element={<Community></Community>}></Route>
        <Route path="/Profile" element={
          <PrivateRoute isLoggedin={isLoggedin}>
            <Profile />
          </PrivateRoute>
        }></Route>
        {/* <Route path="/dashboard" element={
          <PrivateRoute isLoggedin = {isLoggedin}>
              <Dashboard />
          </PrivateRoute>  
        } /> */}
      </Routes>
    </div>
  );
}

export default App;
