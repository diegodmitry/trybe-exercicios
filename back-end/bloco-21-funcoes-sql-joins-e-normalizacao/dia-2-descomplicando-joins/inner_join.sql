-- 1  
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) nome_completo, fa.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.film_id;

-- 2
SELECT s.first_name, s.last_name, ad.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS ad
ON s.address_id = ad.address_id;

-- 3

SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name), a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY first_name DESC
LIMIT 100;

-- 4
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

-- 5
SELECT c.first_name, COUNT(a.address) AS quantidade_enderecos
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

-- 6
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.staff_id;

-- 7
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f
ON f.film_id = fa.film_id;