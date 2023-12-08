import React from "react";

//Router Dom
import { Routes, Route } from "react-router-dom";

//Local Components
import LapashaRoutes from "./routes/LapashaRoutes";
import SideNavbar from "./admin panel/side navbar/SideNavbar"
import Login from "./pages/Login";
import Register from "./pages/Register"

//Css
import "./App.css";


const App = () => {
  return (
    <>
    <LapashaRoutes />

    {/*Nested Routes*/}
    <Routes>
    <Route path="/admin/*" element={<SideNavbar />} />
    <Route path="/admin/login" element={<Login registerPage={"/admin/register"} />} />
    <Route path="/admin/register" element={<Register />} />
    </Routes>
    </>
  )
};

export default App;
