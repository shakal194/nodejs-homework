const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST } = process.env;
const { PORT } = process.env;
const { SECRET_KEY } = process.env;
const { SENDGRID_API_KEY } = process.env;
const { SENDGRID_SENDER_EMAIL } = process.env;

module.exports = { DB_HOST, PORT, SECRET_KEY, SENDGRID_API_KEY, SENDGRID_SENDER_EMAIL };
