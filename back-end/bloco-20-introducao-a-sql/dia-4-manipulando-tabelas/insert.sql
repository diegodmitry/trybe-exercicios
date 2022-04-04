USE sakila;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) 
VALUES('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password) VALUES
('Chun', 'Li', 2, 'chunli@streetfight.com', 1, 1, 'Chun-Li', 'chunli'),
('Terry', 'Bogard',3 , 'terrybogard@fatalfury.com', 1, 1, 'Terry Bogard', 'TheKingOfFighters');
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;
INSERT INTO category (name)
VALUES('Lar', 'Home');
INSERT INTO sakila.store (manager_staff_id, address_id ) VALUES(3, 3);
SELECT * FROM store;
