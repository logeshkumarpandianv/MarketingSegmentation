const { Pool } = require("pg");

const pool = new Pool({
  user: "gc_admin",
  password: "mounting@123$",
  host: "192.168.1.152",
  port: 65432, // default Postgres port
  database: "bi_db",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
