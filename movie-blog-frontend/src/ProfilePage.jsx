import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";

function ProfilePage() {
  const userInfo = {
    username: "WeirdStructure7669",
    profilePic: "https://via.placeholder.com/80", // Varsayılan profil resmi
    description: "u/WeirdStructure7669",
  };

  const tabs = ["Overview", "Posts", "Comments", "Saved", "Hidden", "Upvoted", "Downvoted"];

  return (
    <>
      {/* Navigasyon Barı */}
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-item">Ana Sayfa</Link>
          <Link to="/series" className="navbar-item">Diziler</Link>
          <Link to="/movies" className="navbar-item">Filmler</Link>
          <Link to="/new" className="navbar-item">Yeni ve Popüler</Link>
          <Link to="/list" className="navbar-item">Listem</Link>
        </div>
        <div className="navbar-middle">
          <input type="text" placeholder="Film veya dizi ara..." className="search-input" />
        </div>
        <div className="navbar-right">
          <i className="navbar-icon fas fa-bell"></i>
          <img
            src="https://via.placeholder.com/30"
            alt="Profile"
            className="navbar-profile"
          />
        </div>
      </div>

      {/* Kullanıcı Bilgileri */}
      <div className="profile-header">
        <div className="profile-info">
          <img src={userInfo.profilePic} alt={userInfo.username} className="profile-pic" />
          <div className="profile-details">
            <h1 className="profile-username">{userInfo.username}</h1>
            <p className="profile-description">{userInfo.description}</p>
          </div>
        </div>
        <div className="profile-tabs">
          {tabs.map((tab, index) => (
            <button key={index} className="profile-tab">
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
