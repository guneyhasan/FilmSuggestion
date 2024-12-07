const express = require('express');
const { createMovie, getMovies, getMovieById, updateMovie, deleteMovie } = require('../controllers/movieController');
const { authorize } = require('../middlewares/authMiddleware');
const router = express.Router();

// Sadece admin yetkilendirmesi gereken işlemler
router.post('/', authorize('admin'), createMovie); // Yeni film oluştur
router.put('/:id', authorize('admin'), updateMovie); // Filmi güncelle
router.delete('/:id', authorize('admin'), deleteMovie); // Filmi sil

// Genel erişim
router.get('/', getMovies); // Tüm filmleri getir
router.get('/:id', getMovieById); // Belirli bir filmi getir

module.exports = router;
