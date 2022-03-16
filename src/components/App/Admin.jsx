import React from 'react'
import Header from './Admin/Header';
import Home from './Admin/Home';
import Settings from './Admin/Settings';
import Admission from './Admin/Admission';
import { Routes, Route } from "react-router-dom";


function Admin() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/admission" element={<Admission />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    )
}

export default Admin