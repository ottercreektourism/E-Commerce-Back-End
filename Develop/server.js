const express = require('express');
const routes = require('./routes');

const sequelize = require('./config/connection')

// Import models to sync table with the database
const Category = require('./models/Category');
const Product = require('./models/Product');
const Tag = require('./models/Tag');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// force true drops and recreates the Category table if it already exists regardless of whether theres stuff in it
// TODO: Dont want to have this when I push it to heroku
sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})
