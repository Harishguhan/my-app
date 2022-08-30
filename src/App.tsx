import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import AdminLogin from './Pages/Admin/Login/AdminLogin';
import Register from './Pages/Admin/Register/Register';
import Home from './Pages/dashboard/Home';
import Login from './Pages/Login/Login';
import RegisterForm from './Pages/Register/Register';


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
      </Routes>
    </div>
  );
}

export default App;
