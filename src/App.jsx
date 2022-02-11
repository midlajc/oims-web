import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './components/Login'
import authService from './service/authService';
import { useNavigate } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate()
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      navigate('/')
    }
    else {
      navigate('/login')
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {(currentUser) ?
        <div>
          <Home />
          <button onClick={authService.logout}>logout</button>
        </div> :
        null}
    </div>
  )
}

export default App;
