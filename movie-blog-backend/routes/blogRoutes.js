const express = require('express');
const { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();

// Blog CRUD işlemleri
router.post('/', createBlog); // Yeni blog oluştur
router.get('/', getBlogs); // Tüm blogları getir
router.get('/:id', getBlogById); // Belirli bir blogu getir
router.put('/:id', updateBlog); // Blogu güncelle
router.delete('/:id', deleteBlog); // Blogu sil

module.exports = router;
