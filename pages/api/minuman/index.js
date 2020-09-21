import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getMinuman(req, res) {
  // jika url diaccess dg method selain GET
  if (req.method !== "GET") {
    res.status(500).json({ message: "Sorry, we only accept GET requests." });
  }

  // jika url diaccess dg method GET
  const db = await open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  });

  const minuman = await db.all("SELECT * FROM Minuman");
  res.json(minuman);
}
