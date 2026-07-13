const pool = require("../database/db");

const findUserByEmail = async (email) => {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  return rows[0];
};

const createUser = async (userData) => {
  const { full_name, email, phone, password } = userData;

  const [result] = await pool.query(
    `INSERT INTO users
    (full_name,email,phone,password)
    VALUES(?,?,?,?)`,
    [full_name, email, phone, password],
  );

  return result;
};

module.exports = {
  findUserByEmail,
  createUser,
};
