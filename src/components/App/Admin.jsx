import React from 'react'
import Header from './Admin/Header';
import Home from './Admin/Home';
import Settings from './Admin/Settings';
import { Routes, Route } from "react-router-dom";


function Admin() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    )
}

export default Admin