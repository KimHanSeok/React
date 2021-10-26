import SQ from 'sequelize';
import { sequelize } from '../database/database.js';

const DataTypes = SQ.DataTypes;

export const User = sequelize.define( // create schema
  'user', 
  {
    id: { // auto increament true, PK
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  { timestamps: false },
);