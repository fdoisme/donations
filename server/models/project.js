'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasMany(models.History, { foreignKey: "project_id" })
      // Project.belongsToMany(models.User, { through: models.History, foreignKey: "project_id" })
    }
  }
  Project.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    donation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    hooks: {
      beforeUpdate: (project) => {
        project.donation = this.donation + project.donation;
      },
    },
    sequelize,
    modelName: 'Project',
  });
  return Project;
};