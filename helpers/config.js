const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST } = process.env;
const { PORT } = process.env;

module.exports = { DB_HOST, PORT };
