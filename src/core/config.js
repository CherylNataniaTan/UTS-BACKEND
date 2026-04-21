const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default.
process.env.NODE_ENV = (process.env.NODE_ENV || 'development').toLowerCase();

// Environment variables should be saved in a file named `.env` in the `./config` directory.
// See `.env.example` for example.
const envFound = dotenv.config({ path: '.env' });
if (envFound.error) {
  throw new Error("⚠️ Couldn't find .env file ⚠️");
}

module.exports = {
  env: process.env.NODE_ENV,
  api: {
    prefix: '/api',
  },
  port: process.env.PORT || 5000,
  database: {
    connection: process.env.DB_CONNECTION,
    name: process.env.DB_NAME,
  },
};
