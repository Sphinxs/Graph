module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING((binary = true)),
        allowNull: false
      },
      cpf: DataTypes.STRING,
      gender: DataTypes.CHAR(1),
      birth: DataTypes.DATE,
      name: DataTypes.STRING,
      created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      freezeTableName: true
    }
  );

  User.associate = models => {
    User.hasMany(models.scope);
  };

  return User;
};
