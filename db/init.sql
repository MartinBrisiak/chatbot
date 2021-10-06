\c postgres;

CREATE TABLE orders (
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);

INSERT INTO orders (info)
VALUES('{ "customer": "John Doe", "items": {"product": "Beer","qty": 6}}');
