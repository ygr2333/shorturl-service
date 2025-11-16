const db = require("../config/db");

async function createShort(id, url) {
  await db.query(
    "INSERT INTO short_urls (short_id, original_url) VALUES (?, ?)",
    [id, url]
  );
}

async function getUrlById(id) {
  const [rows] = await db.query(
    "SELECT original_url FROM short_urls WHERE short_id = ?",
    [id]
  );
  return rows[0] || null;
}

module.exports = {
  createShort,
  getUrlById,
};
