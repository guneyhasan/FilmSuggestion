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
        </div>
    );
};

export default Login;
