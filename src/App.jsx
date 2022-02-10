// import './App.css';
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login'

function App() {
  return (
    <Routes>
      <Route path="Login" element={<Login />} />
    </Routes>
  )
}

export default App;
