const express = require("express");
require("dotenv").config();
const mysql2 = require("mysql2/promise");

const { APP_PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } =
  process.env;

const app = require("./src/app.js");

const port = parseInt(APP_PORT ?? "8000", 10);

app.use(express.json());

const pool = mysql2.createPool({
  port: DB_PORT,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

pool
  .getConnection()
  .then(() => console.info("Database wired ⚡"))
  .catch(() => {
    console.warn(
      "Warning:",
      "Failed to get a DB connection.",
      "Did you create a .env file with valid credentials?",
      "Routes using models won't work as intended"
    );
  });

app.get("/projects", async (req, res) => {
  const sql = "SELECT * FROM project;";

  try {
    const [project] = await pool.query(sql);
    res.send(project);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.get("/hello", async (req, res) => {
  res.send("world");
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
