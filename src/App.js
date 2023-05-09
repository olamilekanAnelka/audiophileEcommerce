import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Shopping from './components/shopping';
import Checkout from './components/checkout';
import Signinform from './components/signinform';
import Login from './components/login';
import Userprofile from './components/userprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signinform" element={<Signinform />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Userprofile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
