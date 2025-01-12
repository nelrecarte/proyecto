const { DataTypes } = require("sequelize"); // Import the built-in data types
const sequelize = require("../database");
// Import the built-in data types

const Post = sequelize.define(
  "publicaciones",
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Post.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = {
  Post,
  sequelize,
};
