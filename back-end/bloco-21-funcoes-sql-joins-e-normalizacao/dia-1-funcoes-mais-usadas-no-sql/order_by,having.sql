    SELECT rating, AVG(length) AS MEDIA_DURACAO
    FROM sakila.film
    GROUP BY rating HAVING MEDIA_DURACAO BETWEEN 115.0 AND 121.50
    ORDER BY MEDIA_DURACAO DESC;
    
	SELECT rating, SUM(replacement_cost) AS custo_total
    FROM sakila.film
    GROUP by rating HAVING custo_total > 3950.50
    ORDER BY custo_total;