import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../../utils/axios";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authAPI.login(formData);
            localStorage.setItem('token', response.data.token);
            navigate('/main-page');
        } catch (err) {
            setError("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Giriş Yap</h1>
            {error && <div className="error-message">{error}</div>}
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-label" htmlFor="username">Kullanıcı Adı</label>
                <input
                    type="text"
                    id="username"
                    className="login-input"
                    placeholder="Kullanıcı adınızı girin"
                    value={formData.username}
                    onChange={handleChange}
                />

                <label className="login-label" htmlFor="password">Şifre</label>
                <input
                    type="password"
                    id="password"
                    className="login-input"
                    placeholder="Şifrenizi girin"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button type="submit" className="login-button">Giriş Yap</button>
            </form>

            <div className="login-footer">
                <Link to="/forgot-password" className="login-link">Şifremi Unuttum</Link>
                <span className="login-divider">|</span>
                <Link to="/create-account" className="login-link">Hesap Oluştur</Link>
            </div>
        </div>
    );
};

export default Login;
