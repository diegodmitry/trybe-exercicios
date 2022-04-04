USE sakila;
SELECT * FROM payment WHERE DATE(payment_date) = '2005-05-25';
SELECT DATE(rental_date), YEAR(rental_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) FROM rental WHERE rental_id LIKE '10330';
SELECT * FROM payment WHERE DATE(payment_date) = '2005/07/28/' AND HOUR(payment_date) >= 22;