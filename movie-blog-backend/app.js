const express = require('express');
const { connectDatabase } = require('./config/database');
const User = require('./models/user');

const app = express();
app.use(express.json());

// Veritabanı bağlantısını başlat
connectDatabase();

// API Route Test
app.get('/', (req, res) => {
    res.send('Welcome to Movie Blog Backend');
});

// Uygulamayı çalıştır
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

(async () => {
    await User.sync({ alter: true }); // Tabloları oluştur veya mevcut yapıyı güncelle
})();


const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);
