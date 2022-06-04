const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
    },
    summary:{
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    healthScore:{
      type: DataTypes.INTEGER
    }
  });
};
