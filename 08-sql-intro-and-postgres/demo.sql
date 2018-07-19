-- This is how you make a comment in SQL
-- CREATE TABLE addresses(
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(50),
--   last_name VARCHAR(50),
--   city VARCHAR(50),
--   distance NUMERIC(3,1)
-- );

-- INSERT INTO addresses (first_name, last_name, city, distance) VALUES ('Gregor', 'Sanchez', 'Shoreline', 1);
-- INSERT INTO addresses (first_name, last_name, city, distance) VALUES ('Hound', 'Sanchez', 'Shoreline', 1);
-- INSERT INTO addresses (first_name, last_name, city, distance) VALUES ('Gray', 'Grampa', 'Seattle', 1);
-- INSERT INTO addresses (first_name, last_name, city, distance) VALUES ('Charlotte', 'Grampa', 'Seattle', 1);

-- SELECT  * from addresses ORDER BY city;
SELECT  AVG(distance) from addresses;
-- SELECT  * from addresses WHERE city='Shoreline';
-- SELECT * FROM addresses WHERE id > 1;
-- UPDATE addresses SET distance = 2 WHERE id = 1;
-- DELETE FROM addresses WHERE id = 1;
-- DELETE FROM addresses; -- This line has to be CAREFULLY PLANNED
-- SELECT  * from addresses ORDER BY city;