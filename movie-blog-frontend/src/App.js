import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import ForgotPassword from "./ForgotPassword"; // Forgot Password bileşeni
import MainPage from "./MainPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/main-page" element={<MainPage />} />  
                </Routes>
            </div>
        </Router>
    );
}

export default App;
