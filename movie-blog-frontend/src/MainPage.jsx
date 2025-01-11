import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import missionImp from "./media/mission-impossible.jpg"

function MainPage() {

  const movies = [
    { id: 1, title: "Görevimiz Tehlike", image: {missionImp} , category: "Bugün Sizin İçin Seçtiklerimiz" },
    { id: 2, title: "Görevimiz Tehlike 5", image: "https://via.placeholder.com/150", category: "Bugün Sizin İçin Seçtiklerimiz" },
    { id: 3, title: "Suits", image: "https://via.placeholder.com/150", category: "Listem" },
    { id: 4, title: "Prison Break", image: "https://via.placeholder.com/150", category: "Listem" },
    { id: 5, title: "Alice in Borderland", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 6, title: "The Night Agent", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 7, title: "The Mentalist", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 8, title: "The Boys", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 9, title: "Güç Yüzükleri", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 10, title: "Borderlands", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 11, title: "Maymun Adam", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 12, title: "Kung Fu Panda 4", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 13, title: "Beast Games", image: "https://via.placeholder.com/150", category: "Aksiyon Dizileri" },
    { id: 14, title: "CMYLMZ", image: "https://via.placeholder.com/150", category: "Haftalık Öneriler" },
  ];

  const categories = ["Bugün Sizin İçin Seçtiklerimiz", "Listem", "Aksiyon Dizileri", "Haftalık Öneriler"];

  // En son çıkan filmi belirleme (örneğin, ilk sıradaki film)
  const latestMovie = movies[0];


  return (
    <>
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

      {/* Fragman Kısmı */}
      <div className="trailer-section">
        <video className="trailer-video" autoPlay muted loop>
          <source src={latestMovie.video} type="video/mp4" />
          Tarayıcınız bu videoyu desteklemiyor.
        </video>
        <div className="trailer-title">{latestMovie.title}</div>
      </div>

      <div className="main-page">
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h1 className="category-title">{category}</h1>
            <div className="movie-row">
              {movies
                .filter((movie) => movie.category === category)
                .map((movie) => (
                  <Link to={`/blog/${movie.id}`} key={movie.id} className="movie-card">
                    <img src="https://via.placeholder.com/150" alt={movie.title} className="movie-image" />
                    <div className="movie-title">{movie.title}</div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainPage;
