SET SQL_SAFE_UPDATES = 0;
USE sakila;
UPDATE actor SET first_name = "JULES" WHERE first_name = 'JULIA';
UPDATE category SET name = 'Science Fiction' WHERE name = 'Sci-Fi';
SELECT * FROM payment;