const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });
  const makanan = await db.all("SELECT * FROM Makanan");
  console.log("Makanan List", JSON.stringify(makanan, null, 2));
})();
