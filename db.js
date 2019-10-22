const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/passport", {
  logging: false
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = db;
