import React from 'react'
import { BrowserRouter as Router, Routes, Route,  BrowserRouter } from "react-router-dom";
import App from './App';
import Hero from './Hero';
import Test from './Test';
import PrivateRoute from './PrivateRoute';
import Os from './os/Os';

export default function AppRoutes() {
    console.log("Approutes reached...")
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/courses" element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                    } />
                <Route path="/test" element={<Test />} />
                <Route path="/courses/operating_systems" element={<Os />} />
            </Routes>
        </BrowserRouter>
    )
}