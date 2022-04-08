-- 1 - Checks if the database exists.
-- DROP SCHEMA IF EXISTS albuns;

-- 2 - Create BD
-- CREATE DATABASE albuns;

-- 1 - Create Database and check if there is db albuns
CREATE DATABASE IF NOT EXISTS albuns;

-- 3 - Show all databases
SHOW DATABASES;

-- 4 - Pick up BD
USE albuns;

-- 5 - Fill up BD
CREATE TABLE artista(
	artista_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB CHARSET=utf8mb4;
CREATE TABLE estilomusical(
	estilo_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB CHARSET=utf8mb4;

CREATE TABLE album (
    album_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artista_id SMALLINT UNSIGNED NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(5 , 2 ) NOT NULL,
    estilo_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (artista_id)
        REFERENCES artista (artista_id)
        ON UPDATE CASCADE,
    FOREIGN KEY (estilo_id)
        REFERENCES estilomusical (estilo_id)
        ON UPDATE CASCADE
);

CREATE TABLE cancao (
    cancao_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    album_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY (album_id)
        REFERENCES album (album_id)
)  ENGINE=INNODB CHARSET=UTF8MB4;






