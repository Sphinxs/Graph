const db = require("./models");

db.sequelize
  .sync()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
