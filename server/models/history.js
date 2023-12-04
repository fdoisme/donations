'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.Project, {foreignKey: "project_id"})
      History.belongsTo(models.User, {foreignKey: "user_id"})
    }
  }
  History.init({
    order_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    log: {
      type: DataTypes.DATEONLY,
      defaultValue: new Date()
    },
    comment: {
      type: DataTypes.TEXT,
      defaultValue: ""
    },
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};