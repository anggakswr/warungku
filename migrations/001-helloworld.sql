-- Up
CREATE TABLE Makanan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    namaBrg TEXT,
    hargaBrg INTEGER,
    imgBrg TEXT
);

CREATE TABLE Minuman (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    namaBrg TEXT,
    hargaBrg INTEGER,
    imgBrg TEXT
);

INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg)
VALUES ('Nasi Goreng',12000,'nasi-goreng.jpg');
INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg)
VALUES ('Bubur Ayam',15000,'bubur-ayam.jpeg');
INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg)
VALUES ('Soto Ayam',20000,'soto-ayam.jpg');

INSERT INTO Minuman (namaBrg, hargaBrg, imgBrg)
VALUES ('Es Jeruk',12000,'es-jeruk.jpeg');
INSERT INTO Minuman (namaBrg, hargaBrg, imgBrg)
VALUES ('Ice Cream Coklat',15000,'ice-cream.jpeg');
INSERT INTO Minuman (namaBrg, hargaBrg, imgBrg)
VALUES ('Jus Mangga Bude',20000,'jus-mangga.jpeg');
INSERT INTO Minuman (namaBrg, hargaBrg, imgBrg)
VALUES ('Jus Wortel',20000,'jus-wortel.jpg');
INSERT INTO Minuman (namaBrg, hargaBrg, imgBrg)
VALUES ('Kopi Susu Kekinian',25000,'kopi-susu.jpg');

-- Down
DROP TABLE Makanan;
DROP TABLE Minuman;