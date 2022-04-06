SELECT * FROM sakila.film;
SELECT IF(15 MOD 2 = 0, 'PAR', 'IMPAR') AS 'Par ou Ímpar';
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM ', 220 MOD 12));