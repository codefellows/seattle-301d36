SELECT actors.id, actors.name, movies.title, movies.year
FROM actors
INNER JOIN movies
ON a.id = movies.actor_id
WHERE actors.name = 'Tom Hanks';
