import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getMakananById(req, res) {
  // konek db
  const db = await open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  });

  // jika url diaccess dg method PUT
  if (req.method === "PUT") {
    await db.run(
      "UPDATE Makanan SET namaBrg = ?, hargaBrg = ?, imgBrg = ?",
      req.body.namaBrg,
      req.body.hargaBrg,
      req.body.imgBrg
    );
  }

  const makanan = await db.get("SELECT * FROM Makanan WHERE id = ?", [
    req.query.id,
  ]);
  res.status(200).json(makanan);
}
