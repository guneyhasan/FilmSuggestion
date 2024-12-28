import React from "react";
import { Link } from "react-router-dom"; // Link bileşeni
import "./Login.css";

const Login = () => {
    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form className="login-form">
                <label className="login-label" htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    className="login-input"
                    placeholder="Enter your username"
                />

                <label className="login-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="login-input"
                    placeholder="Enter your password"
                />

                <button type="submit" className="login-button">Login</button>
            </form>

            <div className="login-footer">
                <Link to="/forgot-password" className="login-link">Forgot Password?</Link>
                <span className="login-divider">|</span>
                <Link to="/create-account" className="login-link">Create Account</Link>
            </div>
        </div>
    );
};

export default Login;
