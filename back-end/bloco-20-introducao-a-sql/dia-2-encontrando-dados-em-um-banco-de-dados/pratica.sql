USE PiecesProviders;
SELECT * FROM Provides WHERE Provider = 'RBT';
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;
SELECT * FROM Provides ORDER BY Price DESC LIMIT 4 OFFSET 2;
SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
SELECT * FROM Provides WHERE Piece = 1;