import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCatogory from "./Pages/Admin/Dashboard/Add_medichine/AddCatogory";
import EditData from "./Pages/Admin/Dashboard/Edit_medichine/Edit";
import AdminLogin from "./Pages/Admin/Login/AdminLogin";
import Register from "./Pages/Admin/Register/Register";
import Home from "./Pages/dashboard/Home";
import Login from "./Pages/Login/Login";
import RegisterForm from "./Pages/Register/Register";
const Dashboard = React.lazy(() => import("./Pages/Admin/Dashboard/Dashboard"));
function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin_register" element={<Register />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route
          path="/admin_dashboard"
          element={
            <Suspense
              fallback={
                <div className="d-flex justify-content-center vh-100 align-items-center">
                  <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>  
              }
            >
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="/add_catogary" element={<AddCatogory />} />
        <Route path="/edit_category/:id" element={<EditData />} />
      </Routes>
    </div>
  );
}

export default App;
