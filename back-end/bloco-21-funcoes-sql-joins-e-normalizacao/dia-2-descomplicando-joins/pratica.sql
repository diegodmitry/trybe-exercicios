-- 1
SELECT * FROM Pixar.BoxOffice
JOIN Pixar.Movies
ON Pixar.BoxOffice.movie_id = Pixar.Movies.id;

-- 2
SELECT * FROM Pixar.BoxOffice AS pb
JOIN Pixar.Movies AS pm
ON pb.movie_id = pm.id
WHERE pb.international_sales > pb.domestic_sales;

-- 3
SELECT title, rating FROM Pixar.BoxOffice AS pb
JOIN Pixar.Movies AS pm
ON pb.movie_id = pm.id
ORDER BY pb.rating DESC;

-- 4
SELECT * FROM Pixar.Theater AS pt
LEFT JOIN Pixar.Movies AS pm
ON pt.id = pm.theater_id
ORDER BY pt.name;

-- 4
SELECT * FROM Pixar.Theater AS pt
RIGHT JOIN Pixar.Movies AS pm
ON pt.id = pm.theater_id
ORDER BY pt.name;

-- 6 
SELECT * FROM Pixar.BoxOffice AS pb
JOIN Pixar.Movies AS pm
ON pb.movie_id = pm.id
JOIN Pixar.Theater AS pt
ON pm.theater_id = pt.id
WHERE rating > 8 AND pm.theater_id IS NOT NULL;