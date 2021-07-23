const Sequelize  = require('sequelize');
const ProductModel = require('../models/Products.js');
const UserModel = require('../models/Users');


const db = new Sequelize('LLFGPuEeUB', 'LLFGPuEeUB', 'bjchcNdMcw', {
    host: 'remotemysql.com',
    dialect: 'mysql',
});

const Products = ProductModel(db, Sequelize);
const Users = UserModel(db, Sequelize);

db.sync({ force: false })
    .then(() => {
        console.log('Successfully connected to the database');
    })

module.exports = {
    Products,
    Users,
};