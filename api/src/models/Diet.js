const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('diet', {
      id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
      },
      diets:{
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      }
    },
    {timestamps: false}
    )
  };