import React, { useEffect, useState } from 'react'
import AdminHeader from './Header/adminHeader';
import tokenService from '../service/tokenService';
import { Routes, Route } from "react-router-dom";
import Home from './App/Home';
import Settings from './App/Settings';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = tokenService.getUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [])
  return (
    <div>
      <div>
        <AdminHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App