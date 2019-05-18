module.exports = (sequelize, DataTypes) => {
  const Scope = sequelize.define("scope", {
    id: {
      type: DataTypes.INT,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: DataTypes.TEXT
  });

  Scope.associate = models => {
    Scope.BelongsToMany(models.user);
  };

  return Scope;
};
