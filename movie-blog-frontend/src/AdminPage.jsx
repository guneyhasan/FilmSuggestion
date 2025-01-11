import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminPage.css";

function AdminPage() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      description: "A mind-bending thriller",
      trailer_url: "https://www.youtube.com/watch?v=YoHD9XEInc0",
      release_year: 2010,
      created_at: "2023-01-01",
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      description: "A tale of Batman",
      trailer_url: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      release_year: 2008,
      created_at: "2023-01-02",
    },
  ]);

  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: "",
    description: "",
    trailer_url: "",
    release_year: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editMovieId, setEditMovieId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.genre) {
      setMovies([
        ...movies,
        {
          id: movies.length + 1,
          ...newMovie,
          created_at: new Date().toISOString().split("T")[0],
        },
      ]);
      setNewMovie({ title: "", genre: "", description: "", trailer_url: "", release_year: "" });
    }
  };

  const handleEditMovie = (id) => {
    const movieToEdit = movies.find((movie) => movie.id === id);
    setNewMovie(movieToEdit);
    setEditMode(true);
    setEditMovieId(id);
  };

  const handleSaveEditMovie = () => {
    setMovies(
      movies.map((movie) =>
        movie.id === editMovieId ? { ...movie, ...newMovie } : movie
      )
    );
    setEditMode(false);
    setEditMovieId(null);
    setNewMovie({ title: "", genre: "", description: "", trailer_url: "", release_year: "" });
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="admin-page">
      {/* Navigation Bar */}
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

      {/* Admin Panel */}
      <div className="admin-panel">
        <h1>Admin Panel</h1>

        {/* Add/Edit Movie Form */}
        <div className="add-movie-container">
          <h2>{editMode ? "Edit Movie" : "Add New Movie"}</h2>
          <input
            type="text"
            name="title"
            placeholder="Movie Name"
            value={newMovie.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={newMovie.genre}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleInputChange}
          ></textarea>
          <input
            type="text"
            name="trailer_url"
            placeholder="Trailer URL"
            value={newMovie.trailer_url}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="release_year"
            placeholder="Release Year"
            value={newMovie.release_year}
            onChange={handleInputChange}
          />
          <button onClick={editMode ? handleSaveEditMovie : handleAddMovie}>
            {editMode ? "Save Changes" : "Add Movie"}
          </button>
        </div>

        {/* Movies Table */}
        <div className="movies-list-container">
          <h2>Movies List</h2>
          <input
            type="text"
            placeholder="Search movies..."
            className="movie-search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && filteredMovies.length > 0 ? (
            <table className="movies-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Description</th>
                  <th>Trailer URL</th>
                  <th>Release Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMovies.map((movie) => (
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.description}</td>
                    <td>
                      <a href={movie.trailer_url} target="_blank" rel="noopener noreferrer">
                        Watch Trailer
                      </a>
                    </td>
                    <td>{movie.release_year}</td>
                    <td>
                      <button onClick={() => handleEditMovie(movie.id)}>Edit</button>
                      <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            searchTerm && <p>No movies found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
