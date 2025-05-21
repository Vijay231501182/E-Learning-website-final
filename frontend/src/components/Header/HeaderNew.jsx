import React from 'react'
import { useState, useEffect } from 'react';
import { auth, provider } from "../../firebase"
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import "./headernew.css";
import { useNavigate } from "react-router-dom";

function HeaderNew() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate("/courses");
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
        });
    }, []);

    const handleLogin = () => {
        signInWithPopup(auth, provider);
        navigate("/courses");
    }

    const handleLogout = () => {
        signOut(auth);
        navigate("/");
    }

    return (
        <header className="header">
            <div className="container header-container">
                <a href="/" className="logo">
                    KNOW
                </a>
                
                <div className="auth-buttons">
                    {
                        user ? (
                            <button onClick={handleLogout} className='sign-in'>Logout</button>
                        ) : (
                            <button onClick={handleLogin} className='sign-in'>Sign in</button>
                        )
                    }
                    <button className="button primary-button" onClick={handleGetStarted}>Get Started</button>
                </div>
            </div>
        </header>
    )
}

export default HeaderNew