import SQ from 'sequelize';
import { sequelize } from '../database/database.js';

const DataTypes = SQ.DataTypes;

export const Item = sequelize.define( // create item schema
  'item', 
  {
    id: { // auto increament true, PK
      type: DataTypes.INTEGER,
      autoIncrement: true,  
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(25),
      allowNull: false,
    }
  },
  { timestamps: false },
);