const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary:{
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    healthScore:{
      type: DataTypes.INTEGER
    },
    
    steps:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    image:{
      type: DataTypes.STRING(1000)
    },
  },
  {timestamps: false}
  );
};
