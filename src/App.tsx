import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCatogory from './Pages/Admin/Dashboard/Add_medichine/AddCatogory';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import EditData from './Pages/Admin/Dashboard/Edit_medichine/Edit';
import AdminLogin from './Pages/Admin/Login/AdminLogin';
import Register from './Pages/Admin/Register/Register';
import Home from './Pages/dashboard/Home';
import Login from './Pages/Login/Login';
import RegisterForm from './Pages/Register/Register';
import { RootState } from './Redux/Store';


function App() {

  return (
    <div className="container-fluid">
      <Routes>
        <Route path='/' element={<RegisterForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home /> } />
        <Route path='/admin_register' element={<Register />} />
        <Route path='/admin_login' element={<AdminLogin />} />
        <Route path='/admin_dashboard' element={<Dashboard />} />
        <Route path="/add_catogary" element={<AddCatogory />} />
        <Route path='/edit_category/:id' element={<EditData />} />
      </Routes>
    </div>
  );
}

export default App;
