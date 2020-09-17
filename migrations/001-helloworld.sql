-- Up
CREATE TABLE Makanan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    namaBrg TEXT,
    hargaBrg TEXT,
    imgBrg TEXT
);

INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg) VALUES ('Nasi Goreng Bude','12000','nasi-goreng.jpg');
INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg) VALUES ('Bubur Ayam Pak Le','15000','bubur-ayam.jpeg');
INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg) VALUES ('Soto Ayam Pak Doel','20000','soto-ayam.jpg');
INSERT INTO Makanan (namaBrg, hargaBrg, imgBrg) VALUES ('Kopi Susu Kekinian','25000','kopi-susu.jpg');

-- Down
DROP TABLE Makanan;