import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Register from './Components/register';
import Login from './Components/login';
//import { Router } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root')); // root id from your HTML
//const VirtualRoot = ReactDOM.createRoot(root);


// Virtual Root (V DOM)
root.render(
  <div>
    <Router>
      <p>Changes Done</p>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<h1>Logout</h1>}/>
      </Routes>
    </Router>
  </div>
);
