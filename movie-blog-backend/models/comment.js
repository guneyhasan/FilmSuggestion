const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('comments', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ref_type: {
        type: DataTypes.STRING,  // 'movie' veya 'tv'
        allowNull: false
    },
    ref_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'comments',
    schema: 'public',
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Comment; 