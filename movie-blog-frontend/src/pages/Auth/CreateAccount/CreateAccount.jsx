import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../../../utils/axios";
import "./CreateAccount.css";

const CreateAccount = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        // Şifre kontrolü
        if (formData.password !== formData.confirmPassword) {
            setError("Şifreler eşleşmiyor");
            setLoading(false);
            return;
        }

        try {
            // Backend'e gönderilecek veri
            const registerData = {
                username: formData.username,
                email: formData.email,
                password: formData.password
            };

            const response = await authAPI.register(registerData);
            console.log("Kayıt başarılı:", response);
            
            // Başarılı kayıt sonrası login sayfasına yönlendir
            navigate('/');
        } catch (err) {
            console.error("Kayıt hatası:", err);
            setError(err.response?.data?.message || "Kayıt işlemi sırasında bir hata oluştu");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="create-account-container">
            <h1 className="create-account-title">Hesap Oluştur</h1>
            
            {error && <div className="error-message">{error}</div>}
            
            <form className="create-account-form" onSubmit={handleSubmit}>
                <label className="create-account-label" htmlFor="username">
                    Kullanıcı Adı
                </label>
                <input
                    type="text"
                    id="username"
                    className="create-account-input"
                    placeholder="Kullanıcı adınızı girin"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label className="create-account-label" htmlFor="email">
                    E-posta
                </label>
                <input
                    type="email"
                    id="email"
                    className="create-account-input"
                    placeholder="E-posta adresinizi girin"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label className="create-account-label" htmlFor="password">
                    Şifre
                </label>
                <input
                    type="password"
                    id="password"
                    className="create-account-input"
                    placeholder="Şifrenizi girin"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label className="create-account-label" htmlFor="confirmPassword">
                    Şifre Tekrar
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    className="create-account-input"
                    placeholder="Şifrenizi tekrar girin"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button 
                    type="submit" 
                    className="create-account-button"
                    disabled={loading}
                >
                    {loading ? "Kaydediliyor..." : "Hesap Oluştur"}
                </button>
            </form>

            <div className="create-account-footer">
                <span>Zaten hesabınız var mı?</span>
                <Link to="/" className="create-account-link">Giriş Yap</Link>
            </div>
        </div>
    );
};

export default CreateAccount;
