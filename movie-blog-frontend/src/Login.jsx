import React from "react";
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
                <a href="#forgot-password" className="login-link">Forgot Password?</a>
                <span className="login-divider">|</span>
                <a href="#create-account" className="login-link">Create Account</a>
            </div>
        </div>
    );
};

export default Login;
