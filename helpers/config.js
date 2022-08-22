const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST } = process.env;

module.exports = DB_HOST;
