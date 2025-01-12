require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// CORS ve JSON middleware
app.use(cors());
app.use(express.json());

// TMDB API anahtarını kontrol et
if (!process.env.TMDB_API_KEY) {
    console.error('TMDB_API_KEY bulunamadı!');
    process.exit(1);
}

// Route'ları import et
const discoverRoutes = require('./routes/discoverRoutes');

// Route'ları kullan
app.use('/api/discover', discoverRoutes);

// 404 handler
app.use((req, res) => {
    console.log('404 hatası:', req.path);
    res.status(404).json({ 
        message: 'Sayfa bulunamadı!',
        path: req.path 
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Hata:', err);
    res.status(500).json({ 
        message: 'Bir hata oluştu!',
        error: err.message 
    });
});

// Port tanımla ve sunucuyu başlat
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
});

module.exports = app;

