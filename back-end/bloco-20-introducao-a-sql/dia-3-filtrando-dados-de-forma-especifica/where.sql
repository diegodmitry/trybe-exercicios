USE sakila;
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT * FROM customer WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH' ORDER BY first_name;
SELECT title, description, release_year, replacement_cost FROM film WHERE rating <> 'NC-17' AND replacement_cost >= 18 ORDER BY replacement_cost DESC, title LIMIT 100;
SELECT * FROM customer WHERE store_id = 1 and active = 1;
SELECT * FROM customer WHERE active = 0;
SELECT * FROM film WHERE rating = 'NC-17' order by rental_rate ASC, title limit 50;