const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Labs extends Model { }

Labs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'doctor',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'labs',
    }
);

module.exports = Labs;