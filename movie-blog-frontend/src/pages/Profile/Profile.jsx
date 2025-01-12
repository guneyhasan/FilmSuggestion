import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './Profile.css';

function Profile() {
  const { user } = useAuth();

  return (
    <div className="profile">
      <h1>Profil</h1>
      <div className="profile-info">
        <img 
          src={user?.avatar || '/default-avatar.png'} 
          alt="Profil" 
          className="profile-avatar"
        />
        <h2>{user?.username}</h2>
        <p>{user?.email}</p>
      </div>
    </div>
  );
}

export default Profile; 