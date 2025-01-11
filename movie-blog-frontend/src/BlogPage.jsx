import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { FaThumbsUp, FaPlus, FaSave } from "react-icons/fa"; // İkonları import edin
import "./BlogPage.css";

function BlogPage() {
  const [userRating, setUserRating] = useState(""); // Kullanıcının puanı
  const [userComment, setUserComment] = useState(""); // Kullanıcının yorumu
  const [comments, setComments] = useState([
    { id: 1, text: "Harika bir film, aksiyon sahneleri muhteşemdi!", rating: 9.5, user: "Ali Veli", profilePic: "https://via.placeholder.com/40" },
    { id: 2, text: "Görsel efektler çok iyi ama senaryo biraz zayıf kalmış.", rating: 7.8, user: "Ayşe Yılmaz", profilePic: "https://via.placeholder.com/40" },
  ]);
  const [siteRating, setSiteRating] = useState(0); // Site puanı

  const movieRating = 8.7; // Filmin IMDb puanı
  const youtubeVideoId = "wb49-oV0F78"; // YouTube video ID

  // Site puanını hesaplamak için bir efekt
  useEffect(() => {
    if (comments.length > 0) {
      const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
      const averageRating = totalRating / comments.length;
      setSiteRating(averageRating.toFixed(1)); // Ortalama puanı 1 ondalık basamak ile ayarla
    } else {
      setSiteRating(0); // Eğer yorum yoksa site puanı 0 olarak gösterilsin
    }
  }, [comments]);

  const handleRatingChange = (event) => {
    const value = event.target.value;
    const regex = /^\d+([.,]\d{0,1})?$/;
    if (value === "" || regex.test(value)) {
      setUserRating(value.replace(",", "."));
    }
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleSubmit = () => {
    const numericRating = parseFloat(userRating);
    if (numericRating && numericRating <= 10 && numericRating >= 0 && userComment) {
      const newComment = {
        id: comments.length + 1,
        text: userComment,
        rating: numericRating,
        user: "Kullanıcı Adı", // Varsayılan kullanıcı adı
        profilePic: "https://via.placeholder.com/40", // Varsayılan profil fotoğrafı
      };
      setComments([newComment, ...comments]); // Yeni yorumu listeye ekle
      setUserRating("");
      setUserComment("");
    } else {
      alert("Lütfen geçerli bir puan (0-10 arası) ve yorum girin.");
    }
  };

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

      {/* Film Başlığı */}
      <div className="movie-title-section">
        <h1 className="movie-title">Görevimiz Tehlike: Fallout</h1>
      </div>

      {/* Blog İçeriği */}
      <div className="blog-page">
        <div className="content-wrapper">
          {/* Video Bölgesi */}
          <div className="video-section">
            <YouTube videoId={youtubeVideoId} className="youtube-video" opts={{ width: "100%", height: "390" }} />
          </div>

          {/* Sağ tarafta açıklama metni */}
          <div className="description-section">
            <h2>Film Hakkında</h2>
            <p>
              Bu film, modern aksiyon sinemasının bir başyapıtı olarak kabul edilmektedir.
              Hikaye, cesaret ve zekayla dolu bir kahramanın maceralarını anlatıyor.
              Büyüleyici görseller ve sürükleyici bir anlatımla, izleyiciyi ekran başına kilitliyor.
            </p>
            {/* IMDb Puanı */}
            <div className="rating">
              <span>IMDb Puanı:</span>
              <span className="rating-value">{movieRating} / 10</span>
            </div>
            {/* Site Puanı */}
            <div className="rating">
              <span>Site Puanı:</span>
              <span className="rating-value">{siteRating} / 10</span>
            </div>
          </div>
        </div>

        {/* Butonlar */}
        <div className="video-buttons">
          <button className="video-button">
            <FaThumbsUp style={{ marginRight: "8px" }} /> Beğen
          </button>
          <button className="video-button">
            <FaPlus style={{ marginRight: "8px" }} /> İzleme Listeme Ekle
          </button>
          <button className="video-button">
            <FaSave style={{ marginRight: "8px" }} /> Kaydet
          </button>
        </div>

        {/* Yorum Alanı */}
        <div className="comment-section">
          <h2>Yorumunuz</h2>
          <textarea
            className="comment-input"
            placeholder="Yorumunuzu buraya yazın..."
            value={userComment}
            onChange={handleCommentChange}
          ></textarea>
          <div className="rating-input">
            <label htmlFor="userRating">Puanınız (10 üzerinden): </label>
            <input
              type="text"
              id="userRating"
              value={userRating}
              onChange={handleRatingChange}
              className="user-rating-input"
              placeholder="0-10"
            />
          </div>
          <button className="comment-button" onClick={handleSubmit}>
            Gönder
          </button>
        </div>

        {/* Kullanıcı Yorumları */}
        <div className="user-comments-section">
          <h2>Kullanıcı Yorumları</h2>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="user-comment">
                <div className="user-info">
                  <img src={comment.profilePic} alt={comment.user} className="user-profile-pic" />
                  <span className="user-name">{comment.user}</span>
                </div>
                <p>{comment.text}</p>
                <span className="user-rating">Puan: {comment.rating} / 10</span>
              </div>
            ))
          ) : (
            <p>Henüz yorum yapılmamış.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
