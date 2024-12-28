import React from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
    return (
        <div className="create-account-container">
            <h1 className="create-account-title">Create Account</h1>
            <form className="create-account-form">
                <label className="create-account-label" htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    className="create-account-input"
                    placeholder="Enter your username"
                />

                <label className="create-account-label" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className="create-account-input"
                    placeholder="Enter your email"
                />

                <label className="create-account-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="create-account-input"
                    placeholder="Enter your password"
                />

                <label className="create-account-label" htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    className="create-account-input"
                    placeholder="Confirm your password"
                />

                <button type="submit" className="create-account-button">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
