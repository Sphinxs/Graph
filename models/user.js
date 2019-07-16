module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        noUpdate: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING(11),
        unique: true
      },
      matriculation: {
        type: DataTypes.STRING(8),
        unique: true,
        allowNull: false
      },
      firstName: DataTypes.STRING,
      secondName: DataTypes.STRING,
      creator: type: DataTypes.INTEGER
    },
    {
      freezeTableName: true
    }
  );

  User.associate = models => {
    User.hasMany(models.contact, { as: "contacts" });

    User.belongsToMany(models.scope, {
      through: models.userScope,
      foreignKey: "userId",
      as: "users"
    });
  };

  return User;
};
