import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
import { User } from '../model/user.js';

const DataTypes = SQ.DataTypes;

export const Question = sequelize.define(
  'question',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,  
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }
);
Question.belongsTo(User);