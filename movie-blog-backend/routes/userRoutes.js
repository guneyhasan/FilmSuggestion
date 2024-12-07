const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

// Kullanıcı işlemleri
router.post('/', createUser); // Yeni kullanıcı oluştur
router.get('/', getUsers); // Tüm kullanıcıları getir
router.get('/:id', getUserById); // Belirli bir kullanıcıyı getir
router.put('/:id', updateUser); // Kullanıcı bilgilerini güncelle
router.delete('/:id', deleteUser); // Kullanıcıyı sil

module.exports = router;
