import { Sequelize } from "sequelize";

const db = new Sequelize('uprak_test','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;