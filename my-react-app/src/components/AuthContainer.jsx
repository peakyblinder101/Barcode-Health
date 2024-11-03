import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    };

    const handleSignupSuccess = () => {
        console.log("Navigating to login page...");
        setIsLogin(true); // Switch to login form
        navigate("/auth");
    };

    const handleLoginSuccess = () => {
        navigate("/home");
    };

    return (
        <div>
            {isLogin ? (
                <Login onSwitch={toggleForm} onLoginSuccess={handleLoginSuccess} />
            ) : (
                <Signup onSignupSuccess={handleSignupSuccess} onSwitch={toggleForm} />
            )}
        </div>
    );
};

export default AuthContainer;
