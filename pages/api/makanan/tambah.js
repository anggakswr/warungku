import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function addMakanan(req, res) {
  // konek db
  const db = await open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  });

  // jika url diaccess dg method POST
  if (req.method === "POST") {
    await db.run(
      "INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg) VALUES (?, ?, ?)",
      req.body.namaBrg,
      req.body.hargaBrg,
      req.body.imgBrg
    );
  }

  const makanan = await db.all(
    "SELECT * FROM Makanan WHERE namaBrg = ?",
    req.body.namaBrg
  );
  res.status(200).json(makanan[0]);
}
