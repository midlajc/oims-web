import React, { useEffect, useState } from 'react'
import AdminHeader from './Header/adminHeader';
import storageService from '../service/storageService';
import { Routes, Route } from "react-router-dom";
import Home from './App/Home';
import Settings from './App/Settings';
import ProgressBar from './Header/ProgressBar';
import userContext from '../Context/userContext';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = storageService.getUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [])
  return (
    <div>
      <div>
        <userContext.Provider value={currentUser}>
          <AdminHeader />
          <ProgressBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </userContext.Provider>
      </div>
    </div>
  )
}

export default App