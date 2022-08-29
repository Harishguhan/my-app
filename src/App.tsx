import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import RegisterForm from './Pages/Register/Register';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<RegisterForm />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
