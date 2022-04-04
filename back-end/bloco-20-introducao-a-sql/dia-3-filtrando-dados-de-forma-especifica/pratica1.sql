USE PecasForneced;
SELECT * FROM Pecas WHERE name LIKE 'GR%';
SELECT * FROM Fornecimentos WHERE code = 2 ORDER BY Fornecedor;
SELECT peca, Fornecedor, Preco  FROM Fornecimentos WHERE Fornecedor LIKE "%n%";
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA%' ORDER BY name DESC;
SELECT * FROM Fornecedores WHERE code LIKE '%f%';
SELECT * FROM Fornecimentos WHERE Preco > 15 AND Preco < 40;
SELECT * FROM Vendas WHERE order_date BETWEEN '2018/04/15' AND '2019/07/30';
SHOW TABLES;