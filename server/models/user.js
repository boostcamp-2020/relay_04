const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어있다.
        userid: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
        },
        userpw: {
          type: DataTypes.STRING(250),
          allowNull: false,
        },
        bad: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        modelName: 'User',
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      },
    );
  }
};
