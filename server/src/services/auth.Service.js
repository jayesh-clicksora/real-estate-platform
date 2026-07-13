const bcrypt = require("bcryptjs");

const { findUserByEmail, createUser } = require("../models/user.model");

const hashPassword = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");

const registerUser = async (data) => {
  const existingUser = await findUserByEmail(data.email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await hashPassword(data.password);

  const result = await createUser({
    ...data,
    password: hashedPassword,
  });

  return result;
};

const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken({
    id: user.id,
    role: user.role,
  });

  return { user, token };
};

module.exports = {
  registerUser,
  loginUser,
};
