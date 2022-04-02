//"use strict";
// ! Here we're connecting our server and our db. need a .env file with the info

const { Pool } = require("pg");
const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};
