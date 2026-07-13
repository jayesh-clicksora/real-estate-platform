require("dotenv").config();

const app = require("./src/app");
const pool = require("./src/database/db");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    const connection = await pool.getConnection();

    console.log("✅ Database Connected");

    connection.release();

    app.listen(PORT, () => {
      console.log(`
====================================
🚀 Server Running
🌍 http://localhost:${PORT}
🌱 ${process.env.NODE_ENV}
🗄️ Database Connected
====================================
`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
}

startServer();
