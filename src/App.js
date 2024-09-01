import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage/LoginPage';  
import Home from './home'; // Ensure Home is imported correctly
import Redirect from './components/redirect';

function App() {
  const [activeview, setActiveview] = useState("hi");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage setActiveview={setActiveview}/>} />
        <Route path="/Redirect" element={<Redirect role={activeview} />} /> 
      </Routes>
      </Router>
  );
}

export default App;
