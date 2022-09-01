const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST } = process.env;
const { PORT } = process.env;
const { SECRET_KEY } = process.env;

module.exports = { DB_HOST, PORT, SECRET_KEY };
