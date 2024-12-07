const express = require('express');
const { connectDatabase } = require('./config/database');
const User = require('./models/user');
const Movie = require('./models/movie');
const Blog = require('./models/blog');


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


const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);


const movieRoutes = require('./routes/movieRoutes');

app.use('/api/movies', movieRoutes);

const blogRoutes = require('./routes/blogRoutes');

app.use('/api/blogs', blogRoutes);

// backend tarafinda denemek icin basit view

const viewRoutes = require('./routes/viewRoutes');

app.use('/views', viewRoutes);

const adminViewRoutes = require('./routes/adminViewRoutes');

app.use('/admin', express.urlencoded({ extended: true }), adminViewRoutes);

(async () => {
    await User.sync({ alter: true });
    await Movie.sync({ alter: true });
    await Blog.sync({ alter: true });
})();

